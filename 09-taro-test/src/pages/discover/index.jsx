import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Discover = () => {
  return (
    <View className='discover'>
      <AtList>
        <AtListItem
          title='记账本'
          arrow='right'
          iconInfo={{ size: 25, color: "#6190E8", value: "money" }}
          onClick={()=>
            Taro.navigateTo({
              url: `/pages/account/index`,
            })
          }
        />
        <AtListItem
          title='音乐盒子'
          arrow='right'
          iconInfo={{ size: 25, color: "#FF4949", value: "sound" }}
          onClick={()=>
            Taro.navigateTo({
              url: `/pages/music/index`,
            })
          }
        />
        <AtListItem
          title='个人名片生成器'
          arrow='right'
          iconInfo={{ size: 25, color: "#78A4FA", value: "user" }}
          onClick={()=>
            Taro.navigateTo({
              url: `/pages/card/index`,
            })
          }
        />
      </AtList>
    </View>
  );
};

export default Discover;
