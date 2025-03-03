import { useReducer } from "react";

// 定义一个 reducer 函数，用于管理计数器的状态变化
const countReducer = (state, action) => {
  // 根据 action 的类型来决定如何更新状态
  switch (action.type) {
    case "increment":
      // 如果 action 类型是 "increment"，状态的 count 值加 1
      return { count: state.count + 1 };
    case "decrement":
      // 如果 action 类型是 "decrement"，状态的 count 值减 1
      return { count: state.count - 1 };
    default:
      // 如果 action 类型不匹配，返回当前状态不变
      return state;
  }
};

// Counter 组件，使用 useReducer Hook 来管理计数器的状态
const Counter = () => {
  // 使用 useReducer Hook，传入 reducer 函数和初始状态 { count: 0 }，
  // 返回状态 state 和 dispatch 函数
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  // 渲染组件，显示当前的 count 值和两个按钮
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-60 mx-auto mt-10">
      {/* 显示当前计数 */}
      <p className="text-2xl font-bold text-gray-800">{state.count}</p>

      {/* 点击时触发 "increment" 动作 */}
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
      >
        增加
      </button>

      {/* 点击时触发 "decrement" 动作 */}
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
      >
        减少
      </button>
    </div>
  );
};

export default Counter;
