import React from 'react'
import blogs from '../data/blog'
import { Link } from 'react-router-dom'

const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Blog List</h2>
      <ul className="grid gap-6 list-none p-0">
        {blogs.map((blog, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/blog/${index}`} className="text-lg font-bold text-blue-600 no-underline hover:text-blue-800 transition-colors">
              {blog.title}
            </Link>
            <p className="text-gray-500 text-sm mt-1">By {blog.author} • {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
