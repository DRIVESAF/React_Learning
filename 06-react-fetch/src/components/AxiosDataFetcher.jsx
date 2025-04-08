import { useState, useEffect } from 'react'
import axios from 'axios'

// 使用 Axios 的数据获取组件
const AxiosDataFetcher = () => {
  // 定义状态来存储获取的数据
  const [posts, setPosts] = useState([])
  // 定义状态来处理加载状态
  const [loading, setLoading] = useState(true)
  // 定义状态来处理错误
  const [error, setError] = useState(null)

  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 使用 axios 发起 GET 请求
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: 5 // 限制获取5条数据
          }
        })
        // 更新状态（axios 会自动解析 JSON 响应）
        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        // 错误处理（axios 会在响应状态不是 2xx 时自动抛出错误）
        setError(err.message)
        setLoading(false)
      }
    }

    // 调用获取函数
    fetchData()
  }, []) // 空依赖数组表示仅在组件挂载时执行

  // 加载状态显示
  if (loading) return <div>加载中...</div>
  
  // 错误状态显示
  if (error) return <div>错误: {error}</div>

  // 渲染数据
  return (
    <div>
      <h2>文章列表 (Axios)</h2>
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AxiosDataFetcher