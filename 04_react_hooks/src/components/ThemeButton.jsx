import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// ThemeButton 组件，用于切换应用的主题模式
const ThemeButton = () => {
  // 使用 useContext Hook 从 ThemeContext 获取当前的主题状态和设置函数
  const { theme, setTheme } = useContext(ThemeContext);

  // 渲染组件，包含一个按钮，用于切换主题模式
  return (
    <div
      style={{
        height: "100vh", // 设置组件高度为视口高度
        background: theme === "light" ? "white" : "black", // 根据主题状态设置背景颜色
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background 0.3s ease-in-out", // 添加背景色过渡效果
      }}
    >
      {/* 按钮点击事件处理函数，切换主题状态 */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {/* 按钮文本根据当前主题状态变化 */}
        切换到 {theme === "light" ? "暗黑" : "明亮"} 模式
      </button>
    </div>
  );
};

export default ThemeButton;
