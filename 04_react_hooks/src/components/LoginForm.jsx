import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LoginForm = () => {
  const { login } = useContext(UserContext); // 获取登录函数
  const [username, setUsername] = useState(''); // 用户名输入
  const [password, setPassword] = useState(''); // 密码输入

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username); // 调用登录函数
    } else {
      alert('请输入用户名和密码');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">用户名</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="请输入用户名"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-1">密码</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="请输入密码"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        登录
      </button>
    </form>
  );
};

export default LoginForm;
