import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { AtAvatar, AtList, AtListItem, AtButton } from "taro-ui";
import "./index.scss";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // 检查本地存储中的用户信息
    const storedUserInfo = Taro.getStorageSync("userInfo");
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }

    // 监听登录事件
    Taro.eventCenter.on("userLogin", (user) => {
      setUserInfo(user);
    });

    return () => {
      // 清理事件监听
      Taro.eventCenter.off("userLogin");
    };
  }, []);

  const handleLogin = () => {
    Taro.navigateTo({
      url: "/pages/login/index"
    });
  };

  const handleLogout = () => {
    Taro.removeStorageSync("userInfo");
    setUserInfo(null);
  };

  if (!userInfo) {
    return (
      <View className='profile' style={{ padding: "20px" }}>
        <AtButton type='primary' onClick={handleLogin}>登录</AtButton>
      </View>
    );
  }

  return (
    <View className='profile'>
      <View
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#6190e8",
        }}
      >
        <AtAvatar
          circle
          image={userInfo.avatar}
          size='large'
        />
        <View style={{ color: "#fff", marginTop: "10px" }}>{userInfo.username}</View>
      </View>
      <AtList>
        <AtListItem
          title='我的订单'
          arrow='right'
          iconInfo={{ size: 25, color: "#78A4FA", value: "shopping-cart" }}
        />
        <AtListItem
          title='我的收藏'
          arrow='right'
          iconInfo={{ size: 25, color: "#FF4949", value: "heart" }}
        />
        <AtListItem
          title='设置'
          arrow='right'
          iconInfo={{ size: 25, color: "#6190E8", value: "settings" }}
        />
      </AtList>
      <View style={{ padding: "20px" }}>
        <AtButton type='secondary' onClick={handleLogout}>退出登录</AtButton>
      </View>
    </View>
  );
};

export default Profile;
