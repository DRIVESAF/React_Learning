import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../conponents/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
