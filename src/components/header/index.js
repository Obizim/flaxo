import "./header.scss";
import { FiSearch, FiShoppingCart, FiWind } from "react-icons/fi";

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <FiWind className="logo" />
          <p className="logo-text">Flaxo Bookstore</p>
        </div>

        <div className="header-side">
          <FiSearch />
          <div className="cart">
            <FiShoppingCart />
            <p className="cart-count">10</p>
          </div>
        </div>
      </header>

      <nav>
        <ul className="nav">
          <NavLink to="/" activeClassName="selected" exact className="nav-items">Home</NavLink>
          <NavLink to="/books" exact activeClassName="selected" className="nav-items">Books</NavLink>
          <li className="nav-items">About us</li>
          <li className="nav-items">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
