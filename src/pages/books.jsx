import { useContext } from "react";
import BookCards from "../components/cards/bookcards";
import Loader from "../components/loader";
import { bookContext } from "../context/bookContext";
import "../styles/home.scss";

const Books = () => {
  const { books, loading } = useContext(bookContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="featured">
      <h2 className="all-books">All Books</h2>
      <div className="featured-books">
        {books &&
          books.books.map((book) => <BookCards key={book.id} book={book} />)}
      </div>
    </main>
  );
};

export default Books;
