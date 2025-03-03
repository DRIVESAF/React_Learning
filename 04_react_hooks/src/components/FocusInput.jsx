import { useRef } from "react";

// FocusInput 组件，用于演示如何使用 ref 来控制输入框的焦点
const FocusInput = () => {
  // 使用 useRef Hook 创建一个 ref 对象，用于访问 DOM 元素
  const inputRef = useRef(null);

  // 定义一个函数，用于设置输入框的焦点
  const focusInput = () => {
    // 如果 ref 当前关联的元素存在，则调用 focus 方法
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // 渲染组件，包括一个输入框和一个按钮
  // 输入框的 ref 属性设置为 inputRef，以便在需要时可以访问该元素
  // 按钮的 onClick 事件处理函数设置为 focusInput，以便在点击按钮时调用
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
