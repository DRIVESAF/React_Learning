import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../api/request'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await post('/posts', { title, body })
      navigate('/')
    } catch (error) {
      alert('发布失败：' + error.message)
    }
  }

  return (
    <div>
      <h2>创建帖子</h2>
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
        <button type="submit">发布</button>
      </form>
    </div>
  )
}

export default CreatePost
