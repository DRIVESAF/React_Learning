import { useParams } from "react-router-dom"

const Book = () => {
  const{bookId} = useParams();
  return (
  <div>
    <h2>Book Page</h2>
    <h2>bookId:{bookId}</h2>
  </div>
  )
}

export default Book
