import './cards.scss';

const CartCard = () => {
  return (
    <div className="cart-card">
      <div className="cart-card-img">
      <img src="https://res.cloudinary.com/quidaxengineering/image/upload/v1611741483/feec/the-effective-engineer-cover_bgj7u4.jpg" alt="" />
      </div>

      <div className="cart-card-details">
        <h2 className="name">The Effective Engineer</h2>

        <div className="quantity">
          <button className="sign">-</button>
          <span className="number">1</span>
          <button className="sign">+</button>
        </div>

        <p>$200,00</p>

        <button className="remove">Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
