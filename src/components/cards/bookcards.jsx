import "./bookcards.scss";
import ReactStars from "react-stars";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BookCards = ({ book }) => {
  return (
    <>
      <NavLink to={`/books/${book.title}`} key={book.id} className="book-card">
        <div className="img-wrapper">
          <img src={book.image_url} alt={`${book.title} hardcover`} />
        </div>
        <div className="description">
          <h2>{book.title}</h2>
          <div className="authors">
            {book.authors.map((author, idx) => (
              <p key={idx}>
                {author.name}
                {idx < book.authors.length - 1 ? ",\u00A0" : ""}
              </p>
            ))}
          </div>

          <div className="card-footer">
            <div className="tags">
              <ReactStars
                count={5}
                value={book.rating}
                color2={"#ffa500"}
                half={true}
                edit={false}
              />
              <p>{`$${book.price}`}</p>
            </div>
            <button className="btn">
              Add to cart <FiShoppingCart />
            </button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default BookCards;
