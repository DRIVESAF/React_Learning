import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-[#dceeff] flex justify-between items-center p-3">
      <div>
        <NavLink className="text-[#53adff] mr-4" to="/">Home</NavLink>
        <NavLink className="text-[#53adff] mr-4" to="/about?name=John&age=30">About</NavLink>
        <NavLink className="text-[#53adff] mr-4" to="/dashboard">Dashboard</NavLink>
        <NavLink className="text-[#53adff]" to="/blog">Blog</NavLink>
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center">
            <span className="text-[#53adff] mr-3">欢迎, {user.username}</span>
            <img 
              src={user.avatar} 
              alt="avatar" 
              className="w-8 h-8 rounded-full border border-gray-300 mr-3" 
            />
            <button 
              className="bg-[#53adff] text-white px-3 py-1 rounded border-none" 
              onClick={handleLogout}
            >
              退出
            </button>
          </div>
        ) : (
          <NavLink className="text-white" to="/login">登录</NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
