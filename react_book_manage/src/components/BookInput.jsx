import { useState, useEffect } from 'react';

const BookInput = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    cover: '',
    title: '',
    author: '',
    price: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col">
        <label className="mb-1">封面</label>
        <input
          type="text"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
          className="border rounded px-2 py-1"
          required
        />
      </div>
      
      <div className="flex flex-col">
        <label className="mb-1">标题</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded px-2 py-1"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1">作者</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="border rounded px-2 py-1"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1">价格</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded px-2 py-1"
          step="0.01"
          required
        />
      </div>

      <div className="flex justify-end space-x-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 border-none"
        >
          取消
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#008587] text-white rounded hover:bg-[#006666] border-none"
        >
          确定
        </button>
      </div>
    </form>
  );
};

export default BookInput;