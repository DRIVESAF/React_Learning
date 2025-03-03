import { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2 className="bg-sky-300 p-4 rounded text-white text-center text-2xl font-bold">
        {time}
      </h2>
    </div>
  );
};

export default Time;