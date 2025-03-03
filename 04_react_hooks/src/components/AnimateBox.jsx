import { useState, useLayoutEffect } from "react";

// AnimateBox 组件，用于创建一个随时间移动的盒子
const AnimateBox = () => {
  // 使用 useState Hook 创建一个名为 position 的状态变量，初始值为 0，
  // 这个状态变量将用于存储盒子的 X 坐标位置
  const [position, setPosition] = useState(0);

  // 使用 useLayoutEffect Hook 来处理与布局相关的副作用，
  // 这个 effect 会在组件被挂载到 DOM 后立即执行
  useLayoutEffect(() => {
    // 创建一个定时器，每隔 100 毫秒更新一次 position 状态
    const timer = setInterval(() => {
      setPosition((prev) => prev + 5); // 每次增加 5 像素
    }, 100);

    // 返回一个清理函数，在组件卸载或重新渲染前执行，
    // 这个清理函数用于清除定时器，防止内存泄漏
    return () => clearInterval(timer);
  }, []); // 空依赖数组意味着这个 effect 只在组件首次渲染时运行一次

  // 渲染组件，包括一个 div 元素
  // div 元素的样式包括宽度、高度、背景颜色和变换属性，
  // 变换属性使用 translateX 函数根据 position 状态设置 X 坐标
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        transform: `translateX(${position}px)`, // 根据 position 状态设置 X 坐标
      }}
    />
  );
};

export default AnimateBox;
