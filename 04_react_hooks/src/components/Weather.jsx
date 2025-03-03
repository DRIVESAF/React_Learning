import { useState, useEffect } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const Weather = () => {
  const [city, setCity] = useState('Nanjing');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '460519797920966ddcbb8369032dab2e';

  const weatherIcons = {
    Clear: <WiDaySunny className="text-yellow-400 text-6xl" />,
    Clouds: <WiCloud className="text-gray-300 text-6xl" />,
    Rain: <WiRain className="text-blue-400 text-6xl" />,
    Snow: <WiSnow className="text-white text-6xl" />,
    Thunderstorm: <WiThunderstorm className="text-purple-500 text-6xl" />,
    Fog: <WiFog className="text-gray-400 text-6xl" />,
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('城市未找到');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">天气预报</h1>
      <div className="flex items-center gap-2 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="输入城市名称"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          查询
        </button>
      </div>
      {loading && <p className="text-white">加载中...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-white">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="flex justify-center items-center my-4">
            {weatherIcons[weatherData.weather[0].main] || <WiCloud className="text-gray-300 text-6xl" />}
          </div>
          <p className="text-white mt-2">
            温度: {weatherData.main.temp}°C
          </p>
          <p className="text-white">
            天气: {weatherData.weather[0].description}
          </p>
          <p className="text-white">湿度: {weatherData.main.humidity}%</p>
          <p className="text-white">
            风速: {weatherData.wind.speed} 米/秒
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
