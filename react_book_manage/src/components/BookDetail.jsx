import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookInput from './BookInput';

const BookDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, cover, author, price } = location.state;

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedBook, setEditedBook] = useState({ id, title, cover, author, price });

  const handleEdit = (updatedBook) => {
    // 这里可以调用 API 或者更新本地状态
    console.log('Updated Book:', updatedBook);
    setShowEditModal(false);
    // 更新 URL 状态以反映更改
    navigate(`/bookDetail/${id}`, { state: updatedBook });
  };

  return (
    <div className="flex justify-center items-center min-h-154 bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* 书籍封面 */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={cover}
              alt={title}
              className="w-48 h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* 书籍信息 */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600 mt-2">作者: {author}</p>
            <p className="text-gray-600 mt-2">价格: {price}</p>
            <button
              onClick={() => setShowEditModal(true)}
              className="mt-4 px-4 py-2 bg-[#008587] text-white rounded hover:bg-[#006666] border-none"
            >
              编辑
            </button>
          </div>
        </div>
      </div>

      {/* 编辑模态框 */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-base mb-4">编辑书籍</h2>
            <BookInput
              initialData={editedBook}
              onSubmit={handleEdit}
              onCancel={() => setShowEditModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;