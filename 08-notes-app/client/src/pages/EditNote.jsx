import React, { useEffect, useState } from "react";
import { Form, message, Button } from "antd";
import { updateNote, getNote } from "@/api/noteApi";
import { useStore } from "@/store/userStore";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import NoteForm from "@/components/NoteForm";
// 创建笔记页面组件
const EditNote = () => {
  const navigate = useNavigate(); // 获取导航函数，⽤于⻚⾯跳转
  const { noteId } = useParams(); // 从路由参数中获取笔记 ID
  const { user } = useStore(); // 从全局状态中获取当前⽤户信息
  const [form] = Form.useForm(); // 使⽤ Ant Design 的 Form useForm 钩⼦管理表单
  const [initialValues, setInitialValues] = useState({}); // 表单初始值状态，初始为空对象
  const [tags, setTags] = useState([]);
  // 使⽤ useEffect 钩⼦在组件加载时获取笔记数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        const noteResponse = await getNote(noteId); // 调⽤ API 获取当前编辑的笔记
        const noteData = noteResponse.data; // 获取笔记数据
        const values = {
          title: noteData.title, // 笔记标题
          content: noteData.content, // 笔记内容
          categoryId: noteData.categoryId, // 笔记分类
          tags: noteData.tags, // 笔记标签
        };
        setTags(noteData.tags || []);
        form.setFieldsValue(values);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        message.error("获取数据失败");
      }
    };
    fetchData();
  }, [noteId]); // 依赖项为 noteId
  // 表单提交时的处理函数
  const handleSubmit = async (values) => {
    try {
      const noteData = {
        ...values, // 展开表单提交的值
        userId: user.id, // 添加当前⽤户的 ID 到笔记数据中
      };
      await updateNote(noteId, noteData); // 调⽤ API 更新笔记
      message.success("笔记更新成功");
      navigate("/notes");
    } catch (error) {
      console.error("Failed to update note:", error);
      message.error("更新笔记失败");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <Navbar />
      <div className="relative z-10 p-8">
        <Button 
          type="primary" 
          onClick={() => navigate(-1)} 
          className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-lg px-6 py-3 text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
        >
          返回上一页
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">编辑笔记</h1>
        <div className="backdrop-blur-lg rounded-2xl p-6">
          <NoteForm
            form={form}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            submitButtonText="更新笔记"
            buttonClassName="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-lg px-6 py-3 text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
export default EditNote;
