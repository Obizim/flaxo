import "./cards.scss";

const CartCard = ({ cart, add, decrease, remove }) => {
  let itemPrice = cart.qty * cart.price;

  return (
    <>
      <div key={cart.id} className="cart-card">
        <div className="cart-card-img">
          <img src={cart.image_url} alt={cart.title} />
        </div>

        <div className="cart-card-details">
          <h2 className="name">{cart.title}</h2>

          <div className="quantity">
            <button className="sign" onClick={() => decrease(cart)}>
              -
            </button>
            <span className="number">{cart.qty}</span>
            <button className="sign" onClick={() => add(cart)}>
              +
            </button>
          </div>

          <p>${itemPrice.toFixed(2)}</p>

          <button className="remove" onClick={() => remove(cart)}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
