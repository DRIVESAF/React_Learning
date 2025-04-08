export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/profile/index',
    "pages/product/index",
    "pages/account/index",
    "pages/music/index",
    "pages/card/index",
    "pages/login/index",
  ],
  window: {
    navigationBarBackgroundColor: '#6190e8',
    navigationBarTitleText: '我的应用',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
    ],
  },
})
