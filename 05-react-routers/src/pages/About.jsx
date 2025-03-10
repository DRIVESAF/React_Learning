import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // 解析查询参数
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  return (
    <div>
      <h2>About 页面</h2>
      <p>姓名: {name || "未提供"}</p>
      <p>年龄: {age || "未提供"}</p>
    </div>
  );
};

export default About;
