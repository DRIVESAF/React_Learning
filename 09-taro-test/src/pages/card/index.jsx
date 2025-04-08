import { View } from "@tarojs/components";
import { useState } from "react";
import { AtForm, AtInput, AtButton, AtCard } from "taro-ui";
import NameCard from "../../components/NameCard";
import "./index.scss";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
    company: "",
    email: ""
  });

  const [cardInfo, setCardInfo] = useState(null);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const generateCard = () => {
    setCardInfo({ ...formData });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      phone: "",
      position: "",
      company: "",
      email: ""
    });
    setCardInfo(null);
  };

  return (
    <View className='index' style={{ padding: "20px" }}>
      <AtCard title='个人名片生成器'>
        <AtForm>
          <AtInput
            name='name'
            title='姓名'
            type='text'
            placeholder='请输入姓名'
            value={formData.name}
            onChange={(value) => handleInputChange("name", value)}
          />
          <AtInput
            name='position'
            title='职位'
            type='text'
            placeholder='请输入职位'
            value={formData.position}
            onChange={(value) => handleInputChange("position", value)}
          />
          <AtInput
            name='company'
            title='公司'
            type='text'
            placeholder='请输入公司'
            value={formData.company}
            onChange={(value) => handleInputChange("company", value)}
          />
          <AtInput
            name='phone'
            title='手机号'
            type='phone'
            placeholder='请输入手机号'
            value={formData.phone}
            onChange={(value) => handleInputChange("phone", value)}
          />
          <AtInput
            name='email'
            title='邮箱'
            type='email'
            placeholder='请输入邮箱'
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <View style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
            <AtButton type='primary' onClick={generateCard}>生成名片</AtButton>
            <AtButton onClick={clearForm}>清空</AtButton>
          </View>
        </AtForm>
      </AtCard>
      {cardInfo && (
        <View style={{ marginTop: "20px" }}>
          <NameCard cardInfo={cardInfo} />
        </View>
      )}

    </View>
  );
}
