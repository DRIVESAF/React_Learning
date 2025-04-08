import React, { useState, useEffect } from "react";
import { List, Card, Tag } from "antd";
import { getNotesByCategory } from "@/api/noteApi";
import { useStore as userStore } from "@/store/userStore";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CategoryNotes = () => {
  const { user } = userStore();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchNotesByCategory = async () => {
      try {
        const fetchedNotes = await getNotesByCategory(user.id, categoryId);
        setNotes(fetchedNotes.data);
      } catch (error) {
        console.error("Failed to fetch notes by category:", error);
        alert("获取笔记失败");
      }
    };

    fetchNotesByCategory();
  }, [categoryId]);

  if (!notes) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <Navbar />
      <div className="relative z-10 p-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">分类笔记列表</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={notes}
          className="p-4"
          renderItem={(item) => (
            <Card 
              className="backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-indigo-400/50 transition-all duration-500 rounded-2xl overflow-hidden m-2 flex flex-col" 
              hoverable
            >
              <Card.Meta
                className="flex-grow overflow-hidden"
                title={
                  <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {item.title}
                  </div>
                }
                description={
                  <div className="text-gray-700 text-base leading-relaxed line-clamp-2">
                    {item.content}
                  </div>
                }
              />
              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-nowrap gap-2 overflow-hidden">
                  {item.tags.map((tag) => (
                    <Tag 
                      key={tag}
                      className="backdrop-blur-md bg-gradient-to-r from-blue-400/30 to-purple-400/30 border-0 text-indigo-700 px-4 py-1 text-sm"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
              <div className="mt-4 pt-2 border-t border-gray-200/30">
                <a 
                  href={`/notes/${item.id}`}
                  className="text-indigo-600 hover:text-purple-600 transition-colors duration-300"
                >
                  查看详情
                </a>
              </div>
            </Card>
          )}
        />
      </div>
    </div>
  );
};

export default CategoryNotes;
