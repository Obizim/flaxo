import { useContext, useEffect } from "react";
import BookCards from "../components/cards/bookcards";
import Loader from "../components/loader";
import { bookContext } from "../context/bookContext";
import { cartContext } from "../context/cartContext";
import "../styles/home.scss";

const Books = () => {
  const { books, loading } = useContext(bookContext);
  const { onAdd } = useContext(cartContext);

  useEffect(()  => {
    window.scrollTo(0,0);
  }, [])

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="featured">
      <h2 className="all-books">All Books</h2>
      <div className="featured-books">
        {books &&
          books.books.map((book) => <BookCards key={book.id} book={book} add={onAdd} />)}
      </div>
    </main>
  );
};

export default Books;
