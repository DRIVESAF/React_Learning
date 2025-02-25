import { useState } from "react";
import BookItem from "./BookItem";
import PropTypes from 'prop-types';

const BookList = ({ books, onDeleteBooks, deleteMode, onSelectBook, selectedBooks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-30 py-6 min-h-154">
      <div className="grid grid-cols-5 gap-9 mx-auto ">
        {currentItems.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            price={book.price}
            isDeleteMode={deleteMode}
            isSelected={selectedBooks.includes(book.id)}
            onSelect={onSelectBook}
            category={book.category}
            year={book.year}
            language={book.language}
            publisher={book.publisher}
            description={book.description}
            rating={book.rating}
          />
        ))}
      </div>

      {deleteMode && (
        <div className="flex justify-end mt-4">
          <button
            onClick={onDeleteBooks}
            className="px-4 py-2 bg-red-500 text-white border-none"
          >
            删除选中的书籍
          </button>
        </div>
      )}

      <div className="flex justify-center mt-6">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 mx-2 ${
              currentPage === number
                ? "bg-[#008587] text-white border-none"
                : "bg-gray-200 text-black"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteBooks: PropTypes.func.isRequired,
  deleteMode: PropTypes.bool.isRequired,
  onSelectBook: PropTypes.func.isRequired,
  selectedBooks: PropTypes.array.isRequired,
};

export default BookList;