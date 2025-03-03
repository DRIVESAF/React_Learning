import { useState, useCallback } from "react";
import Child from "./Child";

// Parent 组件⽤于展示计数器，并包含⼀个⼦组件 Child
const Parent = () => {
  // useState Hook 创建⼀个 count 状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // useCallback Hook 记忆化 handleClick 函数
  // 确保 count 未发⽣变化时，handleClick 不会重新创建
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="p-4 text-center">
      {/* 显示当前计数 */}
      <p className="text-xl font-bold">{count}</p>

      {/* 传递 handleClick 函数给子组件 */}
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;
