import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  MailOutlined
} from "@ant-design/icons";

const Header = () => {
  // 当前选中的菜单项
  const [current, setCurrent] = React.useState("home");

  // 点击菜单项时的回调函数
  const handleClick = (e) => {
    console.log("点击了菜单项:", e.key);
    setCurrent(e.key); // 更新当前选中的菜单项
  };

  const bgC = {backgroundColor:"#eecbd6"}

  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="light"
        style={bgC}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="about" icon={<MailOutlined />}>
          邮件
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          个人中心
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;