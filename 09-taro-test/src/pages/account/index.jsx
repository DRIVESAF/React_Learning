import { View,Text } from "@tarojs/components";
import { useState } from "react";
import { AtList, AtListItem, AtCard, AtFab, AtFloatLayout, AtForm, AtInput, AtButton, AtRadio } from "taro-ui";
import "./index.scss";

const Account = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "支出",
    amount: "",
    category: "",
    note: "",
    date: new Date().toISOString().split("T")[0]
  });

  const [records, setRecords] = useState([
    {
      id: 1,
      type: "支出",
      amount: -100,
      category: "餐饮",
      date: "2024-02-21",
      note: "午餐",
    },
    {
      id: 2,
      type: "收入",
      amount: 5000,
      category: "工资",
      date: "2024-02-20",
      note: "2月工资",
    },
    {
      id: 3,
      type: "支出",
      amount: -50,
      category: "交通",
      date: "2024-02-19",
      note: "打车",
    },
  ]);

  // 计算总收支
  const total = records.reduce((sum, record) => sum + record.amount, 0);
  const income = records.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0);
  const expense = records.filter(r => r.amount < 0).reduce((sum, r) => sum + r.amount, 0);

  const handleAddRecord = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = () => {
    if (!formData.amount || !formData.category) {
      return;
    }
    const newRecord = {
      id: records.length + 1,
      ...formData,
      amount: formData.type === "支出" ? -Number(formData.amount) : Number(formData.amount)
    };
    setRecords([newRecord, ...records]);
    setIsFormOpen(false);
    setFormData({
      type: "支出",
      amount: "",
      category: "",
      note: "",
      date: new Date().toISOString().split("T")[0]
    });
  };

  return (
    <View className='account' style={{ minHeight: "100vh" }}>
      {/* 收支统计 */}
      <View style={{ margin: "10px" }}>
        <AtCard title='收支统计'>
          <View style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
            <View>
              <View style={{ color: "#666" }}>总收入</View>
              <View style={{ color: "#6190E8", fontSize: "20px" }}>¥{income.toFixed(2)}</View>
            </View>
            <View>
              <View style={{ color: "#666" }}>总支出</View>
              <View style={{ color: "#FF4949", fontSize: "20px" }}>¥{Math.abs(expense).toFixed(2)}</View>
            </View>
            <View>
              <View style={{ color: "#666" }}>结余</View>
              <View style={{ color: total >= 0 ? "#6190E8" : "#FF4949", fontSize: "20px" }}>¥{total.toFixed(2)}</View>
            </View>
          </View>
        </AtCard>
      </View>

      {/* 记录列表 */}
      <View style={{ margin: "10px" }}>
        <AtList>
          {records.map(record => (
            <AtListItem
              key={record.id}
              title={record.category}
              note={`${record.date} ${record.note}`}
              extraText={`${record.amount >= 0 ? '+' : ''}${record.amount.toFixed(2)}`}
              iconInfo={{
                size: 25,
                color: record.amount >= 0 ? "#6190E8" : "#FF4949",
                value: record.amount >= 0 ? "money" : "shopping-cart",
              }}
            />
          ))}
        </AtList>
      </View>

      {/* 添加按钮 */}
      <View style={{ position: "fixed", right: "30px", bottom: "30px" }}>
        <AtFab onClick={handleAddRecord}>
          <Text className='at-fab__icon at-icon at-icon-add'></Text>
        </AtFab>
      </View>

      {/* 添加记录表单 */}
      <AtFloatLayout
        isOpened={isFormOpen}
        title='添加记录'
        onClose={() => setIsFormOpen(false)}
      >
        <AtForm>
          <AtRadio
            options={[
              { label: '支出', value: '支出' },
              { label: '收入', value: '收入' }
            ]}
            value={formData.type}
            onClick={(value) => setFormData({ ...formData, type: value })}
          />
          <AtInput
            name='amount'
            title='金额'
            type='number'
            placeholder='请输入金额'
            value={formData.amount}
            onChange={(value) => setFormData({ ...formData, amount: value })}
          />
          <AtInput
            name='category'
            title='分类'
            type='text'
            placeholder='请输入分类'
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
          />
          <AtInput
            name='date'
            title='日期'
            type='date'
            value={formData.date}
            onChange={(value) => setFormData({ ...formData, date: value })}
          />
          <AtInput
            name='note'
            title='备注'
            type='text'
            placeholder='请输入备注'
            value={formData.note}
            onChange={(value) => setFormData({ ...formData, note: value })}
          />
          <View style={{ padding: "20px" }}>
            <AtButton type='primary' onClick={handleFormSubmit}>提交</AtButton>
          </View>
        </AtForm>
      </AtFloatLayout>
    </View>
  );
};

export default Account;
