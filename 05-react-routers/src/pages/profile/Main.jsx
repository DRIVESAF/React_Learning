import { Outlet, NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ display: "flex", height: "20rem" }}>
      <nav style={{ width: "200px", background: "#f5f5f5", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink 
          to="/dashboard/profile/main/fans" 
          className={({ isActive }) => (isActive ? "active" : "")} 
          style={{ padding: "10px", textDecoration: "none", color: "#333", borderRadius: "5px" }}
        >
          我的粉丝
        </NavLink>
        <NavLink 
          to="/dashboard/profile/main/follow" 
          className={({ isActive }) => (isActive ? "active" : "")} 
          style={{ padding: "10px", textDecoration: "none", color: "#333", borderRadius: "5px" }}
        >
          我的关注
        </NavLink>
      </nav>

      {/* 右侧内容区域 */}
      <div style={{ flex: 1, padding: "20px", background: "#fff" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
