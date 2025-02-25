import Card from '../components/my-card/index';

const MainPL = () => {
  const cardData = [
    {
      bgImage: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(1).png",
      avatar: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(1).png",
      title: "测试 1",
      content: "内容 1"
    },
    {
      bgImage: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(2).png",
      avatar: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(2).png",
      title: "测试 2",
      content: "内容 2"
    },
    {
      bgImage: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(3).png",
      avatar: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(3).png",
      title: "测试 更改",
      content: "内容 更改"
    }
  ];

  // 内联样式
  const mainContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: "16px",
    flexWrap: "wrap",
  };

  return (
    <div style={mainContainerStyle}>
      {cardData.map((data, index) => (
        <Card 
          key={index} 
          bgImage={data.bgImage} 
          avatar={data.avatar} 
          title={data.title} 
          content={data.content} 
        />
      ))}
    </div>
  );
}

export default MainPL;
