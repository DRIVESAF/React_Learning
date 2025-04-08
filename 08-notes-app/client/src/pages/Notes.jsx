import { useEffect, useState } from "react";
import { List, Card, Tag, Button, message } from "antd";
import { getNotes, deleteNote } from "@/api/noteApi";
import { useStore as userStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";
import Navbar1 from "@/components/Navbar";
import CustomModal from "@/components/CustomModal";

const Notes = () => {
  const navigate = useNavigate();
  const { user } = userStore();
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selecteNoteId, setSelecteNoteId] = useState(null);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate]);

  const fetchNotes = async () => {
    try {
      const fetchNotesData = await getNotes(user.id);
      setNotes(fetchNotesData.data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      alert("获取笔记失败");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <Navbar1 />
      <div className="relative z-10 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">笔记列表</h1>
          <Button 
            type="primary" 
            onClick={() => navigate("/create-note")} 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 rounded-lg px-6 py-3 text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            创建笔记
          </Button>
        </div>
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
              <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200/30">
                <Button 
                  type="link" 
                  onClick={() => navigate(`/notes/${item.id}`)} 
                  className="text-indigo-600 hover:text-purple-600 transition-colors duration-300 p-0"
                >
                  查看详情
                </Button>
                <div className="flex gap-2">
                  <Button
                    type="primary"
                    onClick={() => navigate(`/notes/edit/${item.id}`)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 border-0 hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
                  >
                    编辑
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setModalVisible(true);
                      setSelecteNoteId(item.id);
                    }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 border-0 hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
                  >
                    删除
                  </Button>
                </div>
              </div>
            </Card>
          )}
        />
      </div>

      <CustomModal
        title="确认删除"
        visible={modalVisible}
        content={<p>确定要删除这条笔记吗？此操作不可恢复</p>}
        onConfirm={async () => {
          await deleteNote(selecteNoteId);
          fetchNotes();
          setModalVisible(false);
          setSelecteNoteId(null);
        }}
        onCancel={() => {
          setModalVisible(false);
          setSelecteNoteId(null);
        }}
        successMessage="删除成功"
        errorMessage="删除笔记失败"
      />
    </div>
  );
};

export default Notes;
