{/* 

import React, { useState, useDebugValue } from "react";

// 自定义 Hook，使用 useDebugValue 显示调试信息
function useCustomHook(value) {
  useDebugValue(value ? "Active" : "Inactive");
  return value;
}

const App = () => {
  // 使用 useState 创建一个名为 isActive 的状态，初始值为 false
  const [isActive, setIsActive] = useState(false);

  // 调用自定义 Hook
  useCustomHook(isActive);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </>
  );
};

export default App; */}

{/* 
  import React, { useState, useEffect, useDebugValue } from "react";

// 自定义 Hook，使用 useDebugValue 和 useEffect 来请求 API 数据
function useApi(url) {
  const [data, setData] = useState(null);

  // 使用 useDebugValue 显示调试信息
  useDebugValue(data ? "Data Loaded" : "Loading");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);

  return data;
}

const App = () => {
  // 使用自定义 Hook 获取数据
  const data = useApi("https://api.xygeng.cn/one");

  // 如果数据未加载完成，显示加载提示
  if (!data) return <p>加载中...</p>;

  return (
    <div>
      <h2>{data.content}</h2>
      <p>来源：{data.origin}</p>
      <p>作者：{data.name}</p>
      <p>标签：{data.tag}</p>
    </div>
  );
};

export default App;

  */}



const App = () => {
  return (
  <></>
  )
}

export default App
