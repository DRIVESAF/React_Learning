import { useState } from "react";
import ExpensiveCalculation from "./ExpensiveCalculation";

// ExpensiveCalculationParent 组件
// 作为 ExpensiveCalculation 组件的父组件，管理 count 状态，并传递给子组件
const ExpensiveCalculationParent = () => {
  const [count, setCount] = useState(0); // 定义 count 变量并初始化为 0

  return (
    <div className="p-4">
      {/* 按钮：点击时增加 count */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        增加
      </button>

      {/* 计算组件，传递 count 值 */}
      <ExpensiveCalculation number={count} />
    </div>
  );
};

export default ExpensiveCalculationParent;
