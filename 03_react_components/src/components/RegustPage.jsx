import { useState } from "react";
import RegistForm from "./RegistForm";

const RegistPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>提交数据</h2>
      <RegistForm onSubmit={handleFormSubmit} />
      
      {submittedData && (
        <div>
          <h2>展示数据</h2>
          <p>姓名：{submittedData.name}</p>
          <p>邮箱：{submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;