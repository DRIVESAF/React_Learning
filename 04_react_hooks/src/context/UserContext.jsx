import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 登录函数
  const login = (username) => {
    setUser({ name: username }); // 设置用户状态
  };

  // 登出函数
  const logout = () => {
    setUser(null); // 清除用户状态
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};