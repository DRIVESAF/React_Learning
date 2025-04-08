import React, { useState, useEffect } from "react";
import { Form, Input, Button, Tag, message, Select } from "antd";
import { createNote } from "../api/noteApi";
import { getCategories } from "../api/categoryApi";
import { useStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import NoteForm from "../components/NoteForm";

// 创建笔记页面组件
const CreateNote = () => {
  const navigate = useNavigate();
  const { user } = useStore();
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [categories, setCategories] = useState([]);

  // 使用useEffect 钩子在组件加载时获取分类数据
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        message.error("获取分类失败");
      }
    };
    fetchCategories();
  }, []);

  // 提交表单时的处理函数
  const handleSubmit = async (values) => {
    try {
      const noteData = {
        ...values, // 展开表单提交的值
        userId: user.id, // 添加当前⽤户的 ID 到笔记数据中
      };
      await createNote(noteData); // 调⽤ API 创建笔记
      message.success("笔记创建成功");
      navigate("/notes");
    } catch (error) {
      console.error("Failed to create note:", error);
      message.error("创建笔记失败");
    }
  };

  // 输入框内容变化时的处理函数
  const handleInputChange = (e) => {
    setInputTag(e.target.value);
  };

  const handleAddTag = () => {
    // 如果输入框中有内容且标签为重复
    if (inputTag && !tags.includes(inputTag)) {
      setTags([...tags, inputTag]);
      setInputTag("");
    }
  };

  //删除标签的处理函数
  const handleRemoveTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <NavBar />
      <div className="relative z-10 p-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">创建笔记</h1>
        <div className="backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6">
          <NoteForm
            onSubmit={handleSubmit}
            submitButtonText="创建笔记"
            buttonClassName="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-lg px-6 py-3 text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
