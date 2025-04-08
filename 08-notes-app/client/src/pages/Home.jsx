import { Layout, Typography, Card, List, Tag, Space, Spin, Empty } from "antd";
import Navbar from "@/components/Navbar";
import { useStore as userStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { getNotesByCategories } from "@/api/noteApi";

const { Content } = Layout;
const { Title, Text } = Typography;

const NoteCard = ({ note }) => (
  <Card
    className="m-2 backdrop-blur-lg bg-white/20 border-2 border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-indigo-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-500 rounded-2xl overflow-hidden group"
    hoverable
  >
    <Card.Meta
      title={<div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">{note.title}</div>}
      description={
        <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {note.content?.substring(0, 100) ?? "暂无内容"}
        </div>
      }
    />
    <div className="my-4 flex flex-wrap gap-2">
      {note.tags?.map((tag) => (
        <Tag
          key={tag}
          className="backdrop-blur-md bg-gradient-to-r from-blue-400/30 to-purple-400/30 border-0 text-indigo-700 group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-500"
        >
          {tag}
        </Tag>
      ))}
    </div>
    <a
      href={`/notes/${note.id}`}
      className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-500 transform hover:scale-105"
    >
      点击查看详情
    </a>
  </Card>
);

const CategorySection = ({ category }) => {
  const validNotes = (category.notes || []).filter((note) => note);
  if (validNotes.length === 0) return null;

  return (
    <div className="mb-12 transform hover:scale-[1.01] transition-transform duration-500">
      <Title level={4} className="mb-6 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {category.name}
      </Title>
      <List
        grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 4 }}
        dataSource={validNotes}
        renderItem={(note) => (
          <List.Item key={note.id}>
            <NoteCard note={note} />
          </List.Item>
        )}
      />
    </div>
  );
};

const Home = () => {
  const { user } = userStore();
  const [categoryNotes, setCategoryNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [allTags, setAllTags] = useState([]);

  // 提取所有笔记中的唯一标签
  const extractTags = (categories) => {
    const tagSet = new Set();
    categories.forEach(category => {
      category.notes?.forEach(note => {
        note?.tags?.forEach(tag => tagSet.add(tag));
      });
    });
    return Array.from(tagSet);
  };

  useEffect(() => {
    const fetchCategoryNotes = async () => {
      if (user?.id) {
        try {
          setLoading(true);
          const data = await getNotesByCategories(user.id);
          setCategoryNotes(data || []);
          setAllTags(extractTags(data || []));
        } catch (error) {
          console.error("获取失败:", error.response?.data || error.message);
          setError(error);
          setCategoryNotes([]);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchCategoryNotes();
  }, [user?.id]);

  if (loading) return <Spin fullscreen />;
  if (error) return <Text type="danger">数据加载失败</Text>;

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <Navbar />
      <Content className="relative p-8 z-10">
        {user ? (
          <>
            <Title
              level={2}
              className="mb-12 text-4xl font-bold text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient"
            >
              欢迎你, {user.nickname || user.username}
            </Title>
            
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Tag
                className={`cursor-pointer backdrop-blur-md border-0 text-lg px-4 py-2 ${!selectedTag ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30 text-indigo-700'}`}
                onClick={() => setSelectedTag(null)}
              >
                全部
              </Tag>
              {allTags.map((tag) => (
                <Tag
                  key={tag}
                  className={`cursor-pointer backdrop-blur-md border-0 text-lg px-4 py-2 ${selectedTag === tag ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30 text-indigo-700'}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </div>

            {categoryNotes.length > 0 ? (
              <div className="space-y-12 animate-fade-up">
                {categoryNotes.map((category) => {
                  const filteredNotes = selectedTag
                    ? (category.notes || []).filter(note => note?.tags?.includes(selectedTag))
                    : category.notes;
                  
                  return filteredNotes && filteredNotes.length > 0 ? (
                    <div key={category.id} className="mb-12 transform hover:scale-[1.01] transition-transform duration-500">
                      <Title level={4} className="mb-6 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {category.name}
                      </Title>
                      <List
                        grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 4 }}
                        dataSource={filteredNotes}
                        renderItem={(note) => (
                          <List.Item key={note?.id || Math.random()}>
                            <NoteCard key={note?.id || Math.random()} note={note} />
                          </List.Item>
                        )}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
              <Empty
                description={
                  <span className="text-gray-300 text-lg">您还没有任何笔记</span>
                }
                className="p-12 backdrop-blur-xl bg-white/10 rounded-2xl border-2 border-white/20 shadow-2xl"
              />
            )}
          </>
        ) : (
          <Title
            level={2}
            className="text-4xl font-bold text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient"
          >
            欢迎来到笔记应用
          </Title>
        )}
      </Content>
    </Layout>
  );
};

export default Home;
