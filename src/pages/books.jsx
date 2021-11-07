import { useContext } from "react";
import BookCards from "../components/cards/bookcards";
import { bookContext } from "../context/bookContext";
import "../styles/home.scss";

const Books = () => {
  const { books } = useContext(bookContext);

  return (
    <main className="featured">
         <h2 className="all-books">All Books</h2>
      <div className="featured-books">
        {books && books.books.map((book) => (
          <BookCards key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Books;
