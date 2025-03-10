import React from "react";
import { Form, Input, Button, message, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { users } from "../data/user"; 

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      message.success("登录成功！");
      navigate("/");
    } else {
      message.error("用户名或密码错误！");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">登录</h2>
        <Form name="login" onFinish={onFinish} initialValues={{ username: "", password: "" }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-[#53adff]">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
