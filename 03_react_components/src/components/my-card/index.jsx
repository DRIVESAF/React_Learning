import './style.css';


const Card = ({ bgImage, avatar, title, content }) => {
  return (

    <div className="card-container">
      {/* 背景图 */}
      <div className="card-bg">
        <img src={bgImage} alt="Background" />
      </div>
      <div className="card-body">
        {/* 头像 */}
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
        {/* 标题和内容 */}
        <div className="text-container">
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
