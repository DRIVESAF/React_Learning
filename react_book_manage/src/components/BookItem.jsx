import { PayCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookItem = ({ id, title, cover, author, price, isDeleteMode, isSelected, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookDetail/${id}`, {
      state: { id, title, cover, author, price }
    });
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onSelect(id);
  };

  return (
    <div className="w-50 bg-white flex flex-col p-2 rounded-md relative" onClick={handleClick}>
      {/* Delete Checkbox */}
      {isDeleteMode && (
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={handleCheckboxClick} 
          onClick={(e) => e.stopPropagation()} // 阻止事件冒泡
          className="absolute top-2 right-2"
        />
      )}

      {/* 图书封面 */}
      <div className="flex h-50 w-40 self-center justify-center">
        <img 
          src={cover}
          alt={title} 
          className="h-full object-cover self-center flex"
        /> 
      </div>

      {/* 图书信息 */}
      <div className="pt-2 px-2 flex flex-col justify-around h-full text-sm">
        <div>{title}</div>
        <div className="text-[#adadb4] text-xs">{author}</div>
        <div className="text-[#ae3923] font-bold flex items-center">
          <PayCircleOutlined className="mr-1 scale-110" />
          {price}
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isDeleteMode: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BookItem;
