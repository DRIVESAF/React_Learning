import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { get, put } from '../api/request'

const EditPost = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`)
        setTitle(data.title)
        setBody(data.body)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await put(`/posts/${id}`, { title, body })
      navigate('/')
    } catch (error) {
      setError('修改失败：' + error.message)
    }
  }

  if (loading) return <div>加载中...</div>
  
  if (error) return <div>错误: {error}</div>

  return (
    <div>
      <h2>编辑帖子</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题：</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>内容：</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  )
}

export default EditPost