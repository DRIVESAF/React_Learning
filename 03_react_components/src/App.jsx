import Card from './components/card/Card';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
      <Card
        header={<h3>如梦令·昨夜雨疏风骤</h3>}
        body={<p>昨夜雨疏风骤，浓睡不消残酒，试问卷帘人，却道海棠依旧。</p>}
        footer={<button>请点击</button>}
        headerBg="https://first-buckt.oss-cn-nanjing.aliyuncs.com/2025/02/20/0ae6bd14-79ab-423a-a6e7-5cd5a2b47e6c.png"
      />
      <Card
        header={<h3>如梦令·常记溪亭日暮</h3>}
        body={<p>常记溪亭日暮，沉醉不知归路，兴尽晚回舟，误入藕花深处。</p>}
        footer={<button>请点击</button>}
        headerBg="https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/50%2C000%2B%20Free%20eBooks%20in%20the%20Genre.png"
      />
    </div>
  );
};

export default App;
