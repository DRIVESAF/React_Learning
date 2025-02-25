
import { Carousel } from "antd";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <Carousel autoplay>
        <div>
        <img src="https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(1).jpg" style={contentStyle}/>
        </div>
        <div>
        <img src="https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre(2).jpg" style={contentStyle}/>
        </div>
        <div>
        <img src="https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre.jpg" style={contentStyle}/>
        </div>
      </Carousel>
    </div>
  );
};


const contentStyle = {
  width:"100%",
  height:"300px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

export default MainBanner;