import { useLocation } from 'react-router-dom';

const BookDetail = () => {
  const location = useLocation();
  const { title, cover, author, price } = location.state;

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;