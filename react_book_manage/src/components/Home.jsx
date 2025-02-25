import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookInput from './BookInput';
import { initialBooks } from './data';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState(initialBooks);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleAddBook = (newBook) => {
    const newId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
    setBooks([...books, { ...newBook, id: newId }]);
    setShowModal(false);
  };

  const handleDeleteBooks = () => {
    const updatedBooks = books.filter((book) => !selectedBooks.includes(book.id));
    setBooks(updatedBooks);
    setSelectedBooks([]);
    setDeleteMode(false);
  };

  const handleSelectBook = (bookId) => {
    setSelectedBooks((prevSelectedBooks) => {
      if (prevSelectedBooks.includes(bookId)) {
        return prevSelectedBooks.filter((id) => id !== bookId);
      } else {
        return [...prevSelectedBooks, bookId];
      }
    });
  };

  return (
    <>
      <div className='bg-[#008688] p-3 flex items-center justify-between'>
        <div className='font-bold text-white text-xl'>图书管理系统</div>
        <div className='flex text-white gap-4'>
          <div className='hover:text-[#84ffd7] cursor-pointer' onClick={() => setShowModal(true)}>
            新增
          </div>
          <div
            className={`hover:text-[#84ffd7] cursor-pointer ${deleteMode ? 'text-red-500' : ''}`}
            onClick={() => setDeleteMode((prev) => !prev)}
          >
            删除
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-base mb-4">新增书籍</h2>
            <BookInput
              onSubmit={handleAddBook}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<BookList books={books} onDeleteBooks={handleDeleteBooks} deleteMode={deleteMode} onSelectBook={handleSelectBook} selectedBooks={selectedBooks} />}
            />
            <Route path="/bookDetail/:id" element={<BookDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default Home;