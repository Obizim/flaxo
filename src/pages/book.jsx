import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_BOOK } from "../queries/booksQueries";
import Loader from "../components/loader";
import ReactStars from "react-stars";
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";

const Book = () => {
  const { id } = useParams();
  const { onAdd } = useContext(cartContext);

  const { data, loading } = useQuery(GET_BOOK, { variables: { id } });

  useEffect(()  => {
    window.scrollTo(0,0);
  }, [])

  if (loading) {
    <Loader />;
  }

  return (
    <main className="book-details">
      {data && (
        <>
          <section className="book-detail">
            <div className="img-container">
              <img src={data.book.image_url} alt="" />
            </div>

            <div className="contents">
              <h2 className="name">{data.book.title}</h2>
              <p className="name">{data.book.subtitle}</p>
              <div className="authors">
                {data.book.authors.map((author, idx) => (
                  <span key={idx}>
                    {author.name}
                    {idx < data.book.authors.length - 1 ? ",\u00A0" : ""}
                  </span>
                ))}
              </div>
              <div className="tags">
                <div className="rate">
                  <p className="title">Ratings</p>
                  <ReactStars
                    count={5}
                    value={data.book.rating}
                    color2={"#ffa500"}
                    half={true}
                    edit={false}
                  />
                </div>
                <div className="genres">
                  <p className="title">Genres</p>
                  <div className="genre">
                    {data.book.genres.map((genre, idx) => (
                      <span key={idx}>
                        {genre.name}
                        {idx < data.book.genres.length - 1 ? ",\u00A0" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className="price">{`$${data.book.price}`}</h2>
              <button className="btn" onClick={() => onAdd(data.book,data.book.id)}>
                Add to Cart &nbsp; <FiShoppingCart />
              </button>
            </div>
          </section>
          <p className="description">{data.book.full_description}</p>
        </>
      )}
    </main>
  );
};

export default Book;
