import "./header.scss";
import { FiSearch, FiShoppingCart, FiWind } from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null)

  const showModal = () => {
    setOpenModal(!openModal);
  };

  window.onclick = function(event) {
    if (event.target === modalRef.current) {
      setOpenModal(!openModal);
    }
  }

  return (
    <>
      <>
        {openModal && (
          <div className="modal" ref={modalRef}>
            <div className="modal-content">
              <div className="modal-header">
                <div className="search">
                <FiSearch />
              <input type="search" name="search" placeholder="Search for books" autoFocus={true} />
                </div>
              <span className="close" onClick={showModal}>&times;</span>
              </div>
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
          <div className="cart">
            <FiShoppingCart />
            <p className="cart-count">10</p>
          </div>
        </div>
      </header>

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
          <NavLink
            to="/contact"
            exact
            activeClassName="selected"
            className="nav-items"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
