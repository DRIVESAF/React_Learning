import { UserProvider } from '../context/UserContext';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const UserPage = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col items-center  p-6">
        <div className="w-full max-w-md bg-white rounded-2xl p-6 border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">用户页面</h1>
          <LoginForm />
          <UserProfile />
        </div>
      </div>
    </UserProvider>
  );
};

export default UserPage;
