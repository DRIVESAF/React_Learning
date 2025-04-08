import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { get } from '../api/request'

const PostDetial = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`)
        setPost(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) return <div>加载中...</div>
  
  if (error) return <div>错误: {error}</div>

  if (!post) return <div>未找到帖子</div>

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">
        ← 返回列表
      </Link>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostDetial
