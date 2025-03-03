import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, logout } = useContext(UserContext); // 获取用户状态和登出函数

  if (!user) {
    return <div className="text-center text-lg text-gray-600 mt-10">请先登录</div>; // 如果用户未登录，显示提示
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white  rounded-2xl w-80 mx-auto mt-10 border border-gray-200">
      <p className="text-xl font-semibold text-gray-800">欢迎你, <span className="text-blue-500">{user.name}</span>!</p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
      >
        退出登录
      </button>
    </div>
  );
};

export default UserProfile;
