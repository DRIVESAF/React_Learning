import axios from "axios";

// 创建影视资讯API的axios实例
const movieRequest = axios.create({
  baseURL: "https://apis.tianapi.com",
  timeout: 5000,
  params: {
    key: "85b892f89f9d2921d58d52e9d9f0cd99"
  }
});

// 响应拦截器
movieRequest.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    if (response.data.code === 200) {
      return response.data.result;
    }
    return Promise.reject(new Error(response.data.msg || '请求失败'));
  },
  (error) => {
    console.error("请求错误:", error.message);
    return Promise.reject(error);
  }
);

// 获取影视资讯列表
export const getMovieNews = (page = 1, num = 10) => {
  return movieRequest({
    method: "get",
    url: "/film/index",
    params: {
      page,
      num
    }
  });
};