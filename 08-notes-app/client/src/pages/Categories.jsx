import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
import { getCategories } from "@/api/categoryApi";
import { useStore as userStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Categories = () => {
  const navigate = useNavigate();
  const { user } = userStore();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        alert("获取分类失败");
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <Navbar />
      <div className="relative z-10 p-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">分类列表</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={categories}
          className="p-4"
          renderItem={(item) => (
            <Card 
              hoverable 
              className="backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-indigo-400/50 transition-all duration-500 rounded-2xl overflow-hidden m-2"
            >
              <Card.Meta 
                title={
                  <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {item.name}
                  </div>
                } 
              />
              <a 
                href={`/notes/categories/${item.id}`}
                className="inline-block mt-4 text-indigo-600 hover:text-purple-600 transition-colors duration-300"
              >
                查看分类笔记
              </a>
            </Card>
          )}
        />
      </div>
    </div>
  );
};

export default Categories;
