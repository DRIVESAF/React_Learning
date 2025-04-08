import React, { useState, useEffect } from "react";
import { Card, Descriptions, Tag, Button } from "antd";
import { getNote } from "@/api/noteApi";
import { useStore as userStore } from "@/store/userStore";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Note = () => {
  const { user } = userStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  useEffect(() => {
    const fetchNoteDetails = async () => {
      try {
        const fetchedNote = await getNote(id);
        console.log(fetchedNote);
        setNote(fetchedNote.data);
      } catch (error) {
        console.error("Failed to fetch note details:", error);
        alert("获取笔记详情失败");
        navigate("/notes");
      }
    };

    fetchNoteDetails();
  }, [id, navigate]);

  if (!note) return <div>Loading...</div>;

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
        <Card 
          className="backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-indigo-400/50 transition-all duration-500 rounded-2xl overflow-hidden"
          hoverable
        >
          <Card.Meta 
            title={
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {note.title}
              </div>
            } 
            description={
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {note.content}
              </div>
            } 
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <Tag 
                key={tag}
                className="backdrop-blur-md bg-gradient-to-r from-blue-400/30 to-purple-400/30 border-0 text-indigo-700 px-4 py-1 text-sm"
              >
                {tag}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Note;
