import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { get, del } from '../api/request'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    try {
      await del(`/posts/${id}`)
      setPosts(posts.filter(post => post.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get('/posts')
        setPosts(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>加载中...</div>
  
  if (error) return <div>错误: {error}</div>

  return (
    <div>
      <h2>帖子列表</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link to={`/post/${post.id}`}>
                <h3 style={{ margin: 0 }}>{post.title}</h3>
              </Link>
              <button onClick={() => handleDelete(post.id)}>删除</button>
              <button onClick={() => navigate(`/edit/${post.id}`)}>修改</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
