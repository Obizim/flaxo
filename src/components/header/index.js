import "./header.scss";
import { FiSearch, FiShoppingCart, FiWind } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { bookContext } from "../../context/bookContext";
import SearchResult from "../search-result";
import Cart from "../cart/cart";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpencart] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const modalRef = useRef(null);
  const { books } = useContext(bookContext);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  const showCart = () => {
    setOpencart(!openCart);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);

  window.onclick = function (event) {
    if (event.target === modalRef.current) {
      setOpenModal(!openModal);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const sBooks = books.books.filter((book) => {
      return book.title.toLowerCase().match(query.toLowerCase());
    });
    setSearchedBooks(sBooks);
    setQuery("");
  };

  return (
    <>
      <>
        {openModal && (
          <div className="modal" ref={modalRef}>
            <div className="modal-content">
              <div className="modal-header">
                <form className="search" onSubmit={onSubmit}>
                  <FiSearch />
                  <input
                    type="search"
                    name="search"
                    placeholder="Search for books"
                    autoFocus={true}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
                <span className="close" onClick={showModal}>
                  &times;
                </span>
              </div>

              <SearchResult
                searchedBooks={searchedBooks}
                modal={openModal}
                modalFunc={setOpenModal}
              />
            </div>
          </div>
        )}
      </>

      

      <header className="header">
        <div className="header-logo">
          <FiWind className="logo" />
          <p className="logo-text">Flaxo Bookstore</p>
        </div>

        <div className="header-side">
          <FiSearch onClick={showModal} />
          <div className="cart" onClick={showCart}>
            <FiShoppingCart />
            <p className="cart-count">0</p>
          </div>
        </div>
      </header>
      <div className={`${!openCart ? "cart-active" : "cart-inactive"} cart-bg`}>{<Cart openCart={showCart} />}</div>

      <nav>
        <ul className="nav">
          <NavLink
            to="/"
            activeClassName="selected"
            exact
            className="nav-items"
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            exact
            activeClassName="selected"
            className="nav-items"
          >
            Books
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
