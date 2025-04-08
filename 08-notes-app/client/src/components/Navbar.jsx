import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Typography, Avatar, Space, Button, Modal } from "antd";
import { useStore } from "@/store/userStore";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.error("退出过程中发生错误:", error);
    }
  };

  const selectedKeys = React.useMemo(() => {
    switch (location.pathname) {
      case "/":
        return ["home"];
      case "/notes":
        return ["notes"];
      case "/categories":
        return ["categories"];
      default:
        return [];
    }
  }, []);

  return (
    <Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          style={{
            flex: 1,
          }}
          items={[
            {
              key: "home",
              label: "首页",
              onClick: () => navigate("/"),
            },
            {
              key: "notes",
              label: "笔记",
              onClick: () => navigate("/notes"),
            },
            {
              key: "categories",
              label: "分类",
              onClick: () => navigate("/categories"),
            },
          ]}
        />

        <Space>
          {user ? (
            <>
              <Space align="center">
                <Avatar src={user.avatar_url}></Avatar>
                <Text style={{ color: "white" }}>{user.username}</Text>
              </Space>
              <Button type="primary" onClick={handleLogout}>
                退出
              </Button>
            </>
          ) : (
            <Button type="primary" onClick={() => navigate("/login")}>
              登录
            </Button>
          )}
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;
