import { useImperativeHandle, forwardRef } from "react";

// Child1 组件，使用 forwardRef 和 useImperativeHandle 来暴露 DOM 操作给父组件
const Child1 = forwardRef((props, ref) => {
  // 使用 useImperativeHandle Hook 来自定义暴露给父组件的实例方法
  // 这里暴露了一个名为 focus 的方法，用于设置输入框的焦点
  useImperativeHandle(ref, () => ({
    focus: () => {
      // 当父组件调用这个方法时，它将获取到 id 为 "child-input" 的 DOM 元素，并设置焦点
      document.getElementById("child-input").focus();
    },
  }));

  // 渲染一个输入框元素，其 id 为 "child-input"
  return <input id="child-input" type="text" />;
});

export default Child1;
