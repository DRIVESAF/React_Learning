import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginUser } from "@/api/userApi";
import { useStore as userStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const { setUser } = userStore();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await loginUser(values);
      setUser(response.data); // 保存用户信息
      message.success("登录成功");
      navigate("/"); // 跳转到首页
    } catch (error) {
      console.error("Login failed:", error);
      alert("用户名或密码错误");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-indigo-400/50 transition-all duration-500 rounded-2xl overflow-hidden p-8 w-96 relative z-10">
        <Title level={2} className="text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          登录
        </Title>
        <Form name="login-form" onFinish={onSubmit} className="space-y-6">
          <Form.Item
            name="username"
            initialValue="zhf"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-indigo-400" />}
              placeholder="用户名"
              className="w-full backdrop-blur-md bg-white/50 border-2 border-white/30 rounded-lg p-3 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
            />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue="123456"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-indigo-400" />}
              placeholder="密码"
              className="w-full backdrop-blur-md bg-white/50 border-2 border-white/30 rounded-lg p-3 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
            />
          </Form.Item>
          <Button 
            type="primary" 
            htmlType="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-lg text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            登录
          </Button>
        </Form>
        <div className="text-center mt-6 text-indigo-700">
          还没有账号？ <a href="/register" className="text-purple-600 hover:text-pink-600 transition-colors duration-300">去注册</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
