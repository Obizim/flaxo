import "./footer.scss";
import {
  FiWind,
  FiPhoneCall,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-details">
          <div className="footer-logo">
            <FiWind className="logo" />
            <p className="logo-text">Flaxo Bookstore</p>
          </div>

          <ul className="locations">
            <li className="items">
              <FiMapPin /> No 123 Ikoyi Lagos
            </li>
            <li className="items">
              <FiPhoneCall /> +234-814-356-345-1, +234-81-345-345-2
            </li>
            <li className="items">
              <FiMail /> falxobookstore@gmail.com
            </li>
          </ul>
        </div>

        <div className="links">
          <h3 className="title">COMPANY INFORMATION</h3>
          <ul className="links-ul">
            <li className="items">About us</li>
            <li className="items">Contact us</li>
            <li className="items">Help & FAQ</li>
            <li className="items">Events & News</li>
          </ul>
        </div>

        <div className="socials">
          <h3 className="title">FOLLOW US ON</h3>
          <ul className="socials-ul">
            <li className="items">
              <FiFacebook />
            </li>
            <li className="items">
              <FiTwitter />
            </li>
            <li className="items">
              <FiInstagram />
            </li>
          </ul>

          <h3 className="title">NEWSLETTER</h3>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-mail"
              required
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr />
    </footer>
  );
};

export default Footer;
