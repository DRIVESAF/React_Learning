import { View, Image } from "@tarojs/components";
import { AtList, AtListItem, AtCard } from "taro-ui";

const NameCard = ({ cardInfo }) => {
  return (
    <AtCard>
      <View style={{ display: "flex", padding: "20px" }}>
        <View style={{ marginRight: "20px" }}>
          <Image
            src='https://first-buckt.oss-cn-nanjing.aliyuncs.com/2025/02/21/e41d7643-25c4-49d8-a0e4-e4d644229866.jpg'
            style={{ width: "80px", height: "80px", borderRadius: "40px" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            {cardInfo.name}
          </View>
          <View style={{ color: "#666", fontSize: "14px" }}>
            {cardInfo.position} @ {cardInfo.company}
          </View>
        </View>
      </View>
      <AtList>
        <AtListItem title='手机' extraText={cardInfo.phone} iconInfo={{ size: 25, color: "#78A4FA", value: "phone" }} />
        <AtListItem title='邮箱' extraText={cardInfo.email} iconInfo={{ size: 25, color: "#6190E8", value: "mail" }} />
      </AtList>
    </AtCard>
  );
};

export default NameCard;