import  { useState } from "react";
import "./style.css";

const Card = ({ header, body, footer, headerBg }) => {
  const [buttonText, setButtonText] = useState("请点击");
  const handleClick = () => {
    setButtonText("已点击");
  };

  return (
    <div className="card-container">
      <div className="card-header" style={{ backgroundImage: `url(${headerBg})` }}>
        {header}
      </div>

      <div className="card-body">{body}</div>

      {footer && (
        <div className="card-footer">
          <button onClick={handleClick}>{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default Card;
