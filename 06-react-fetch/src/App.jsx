import React from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import AppRoutes from "./routes";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      style={{
        color: isActive ? '#1890ff' : '#000',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal'
      }}
    >
      {children}
    </Link>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
          <li><NavLink to="/">文章列表</NavLink></li>
          <li><NavLink to="/create">新建文章</NavLink></li>
          <li><NavLink to="/movies">影视资讯</NavLink></li>
        </ul>
      </nav>
      <hr />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;