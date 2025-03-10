import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blog';

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-4">{blog.title}</h2>
      <div className="text-gray-600 text-center mb-2">作者： {blog.author} • {blog.date}</div>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg leading-relaxed text-gray-800 mb-4">{blog.content}</p>
      <div className="flex justify-between items-center text-gray-600 text-sm">
        <div>❤️ {blog.likes} Likes</div>
        <div className="flex space-x-2">
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;