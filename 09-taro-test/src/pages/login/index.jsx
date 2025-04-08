import { View } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import './index.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleLogin = () => {
    if (!formData.username || !formData.password) {
      Taro.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // 模拟登录成功
    const userInfo = {
      username: formData.username,
      avatar: 'https://first-buckt.oss-cn-nanjing.aliyuncs.com/2025/02/21/e41d7643-25c4-49d8-a0e4-e4d644229866.jpg'
    };

    // 存储用户信息到本地
    Taro.setStorageSync('userInfo', userInfo);

    // 触发登录成功事件
    Taro.eventCenter.trigger('userLogin', userInfo);

    // 返回上一页
    Taro.navigateBack();
  };

  return (
    <View className='login' style={{ padding: '20px' }}>
      <AtForm>
        <AtInput
          name='username'
          title='用户名'
          type='text'
          placeholder='请输入用户名'
          value={formData.username}
          onChange={(value) => setFormData({ ...formData, username: value })}
        />
        <AtInput
          name='password'
          title='密码'
          type='password'
          placeholder='请输入密码'
          value={formData.password}
          onChange={(value) => setFormData({ ...formData, password: value })}
        />
        <View style={{ marginTop: '20px' }}>
          <AtButton type='primary' onClick={handleLogin}>登录</AtButton>
        </View>
      </AtForm>
    </View>
  );
};

export default Login;