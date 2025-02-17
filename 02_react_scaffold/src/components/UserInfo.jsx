import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserInfo: false,
      hobbies: {
        sports: false,
        singing: false,
        dancing: false,
        painting: false,
      },
    };
  }

  handleHobbyChange = (hobby) => {
    this.setState((prevState) => ({
      hobbies: {
        ...prevState.hobbies,
        [hobby]: !prevState.hobbies[hobby],
      },
    }));
  };

  render() {
    const userInfo = [
      {
        id: 149021838,
        nickName: "雾失楼台",
        personalMsg: "人间聚散无常，愿所有的心，都有能着陆的地方。",
        birthday: "2000-1-1",
      },
    ];

    const coverUrl =
      "https://public-cdn-oss.mosoteach.cn/avatar/2023/88/0021b19aa060714c85a488d6b2ce8450.jpg?v=1693568176&x-oss-process=style/s300x300";

    const backgroundColor = "linear-gradient(to top,rgb(82, 191, 244), rgb(126, 242, 252))";

    return (
      <div style={{ background: backgroundColor, padding: "20px", borderRadius: "8px", textAlign: "center" }}>
        <button onClick={() => this.setState({ showUserInfo: true })}>展开用户信息</button>

        {this.state?.showUserInfo && (
          <div>
            <img src={coverUrl} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: "50%", paddingTop: 20 }} />
            <h2>昵称: {userInfo[0].nickName}</h2>
            <h3>个性签名: {userInfo[0].personalMsg}</h3>
            <h3>生日: {userInfo[0].birthday}</h3>

            <div>
              <h3>兴趣爱好:</h3>
              <label
                style={{
                  color: this.state.hobbies.sports ? "orange" : "darkblue",
                }}
              >
                <input
                  type="checkbox"
                  checked={this.state.hobbies.sports}
                  onChange={() => this.handleHobbyChange("sports")}
                />
                运动
              </label>
              <br />
              <label
                style={{
                  color: this.state.hobbies.singing ? "orange" : "darkblue",
                }}
              >
                <input
                  type="checkbox"
                  checked={this.state.hobbies.singing}
                  onChange={() => this.handleHobbyChange("singing")}
                />
                唱歌
              </label>
              <br />
              <label
                style={{
                  color: this.state.hobbies.dancing ? "orange" : "darkblue",
                }}
              >
                <input
                  type="checkbox"
                  checked={this.state.hobbies.dancing}
                  onChange={() => this.handleHobbyChange("dancing")}
                />
                舞蹈
              </label>
              <br />
              <label
                style={{
                  color: this.state.hobbies.painting ? "orange" : "darkblue",
                }}
              >
                <input
                  type="checkbox"
                  checked={this.state.hobbies.painting}
                  onChange={() => this.handleHobbyChange("painting")}
                />
                绘画
              </label>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserInfo;
