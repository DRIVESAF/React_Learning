import { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

// ExpensiveComponentParent 组件⽤于展示计数器，并包含⼀个昂贵的⼦组件
const ExpensiveComponentParent = () => {
  // useState Hook 创建 count 状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // useCallback Hook 记忆化 memoizedAction 函数
  // useCallback 确保 count 未发⽣变化时，避免不必要的重新创建
  const memoizedAction = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="p-4 text-center">
      {/* 显示当前计数 */}
      <p className="text-xl font-bold">Count: {count}</p>

      {/* 传递 memoizedAction 给 ExpensiveComponent */}
      <ExpensiveComponent onAction={memoizedAction} />
    </div>
  );
};

export default ExpensiveComponentParent;
