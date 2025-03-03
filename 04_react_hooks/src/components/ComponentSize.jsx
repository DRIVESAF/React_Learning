import { useState, useLayoutEffect, useRef } from "react";

// ComponentSize 组件，用于展示子组件的尺寸
const ComponentSize = () => {
  // 使用 useState Hook 创建一个名为 size 的状态变量，初始值为 0，
  // 这个状态变量将用于存储子组件的宽度
  const [size, setSize] = useState(0);

  // 使用 useRef Hook 创建一个 ref 对象，用于访问子组件的 DOM 元素
  const divRef = useRef();

  // 使用 useLayoutEffect Hook 来执行 DOM 相关的副作用操作，
  // 这个 effect 会在组件渲染到屏幕之后立即执行，并且会在组件更新后重新执行
  useLayoutEffect(() => {
    // 通过 ref 获取子组件的 DOM 元素，并获取其宽度
    setSize(divRef.current.offsetWidth);
  }, []); // 空依赖数组意味着这个 effect 只在组件首次渲染时运行一次

  // 渲染组件，包括一个子组件和一个段落
  // 子组件的 ref 属性设置为 divRef，以便在 useLayoutEffect 中访问该元素，
  // 段落元素显示子组件的宽度
  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
        }}
      ></div>
      <p>Width of div: {size}</p>
    </div>
  );
};

export default ComponentSize;
