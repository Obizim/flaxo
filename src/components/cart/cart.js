import "./cart.scss";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import CartCard from "../cards/cartCard";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const Cart = ({ openCart }) => {
  const { cartItems, onAdd, onDecrease, onRemove } = useContext(cartContext);

  let total = cartItems.reduce(
    (sum, item) => (sum += item.price * item.qty),
    0
  );

  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <p onClick={openCart}>&#x2190;</p>
        <h2>
          Cart Items <FiShoppingBag />
        </h2>
      </div>

      <div className="cart-body">
        {cartItems.length === 0 ? (
          <h2 className="empty">
            <FiShoppingCart /> &nbsp; Your Cart is Empty
          </h2>
        ) : (
          <div>
            {cartItems.map((cart, idx) => (
              <div key={idx}>
                <CartCard
                  cart={cart}
                  add={onAdd}
                  decrease={onDecrease}
                  remove={onRemove}
                />
              </div>
            ))}
            <div className="total">
              <h2>Total</h2>
              <h2>${total.toFixed(2)}</h2>
            </div>

            <button className="checkout">Checkout</button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Cart;
