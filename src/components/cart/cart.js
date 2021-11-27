import "./cart.scss";
import { FiShoppingBag } from "react-icons/fi";
import CartCard from "../cards/cartCard";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const Cart = ({ openCart }) => {
  const { cartItems, onAdd, onDecrease, onRemove } = useContext(cartContext);

  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <p onClick={openCart}>&#x2190;</p>
        <h2>
          Cart Items <FiShoppingBag />
        </h2>
      </div>

      <div className="cart-body">
        {cartItems.map((cart, idx) => {
          return (
            <CartCard
              key={idx}
              cart={cart}
              add={onAdd}
              decrease={onDecrease}
              remove={onRemove}
            />
          );
        })}

        <div className="total">
          <h2>Total</h2>
          <h2>$3330</h2>
        </div>

        <button className="checkout">Checkout</button>
      </div>
    </aside>
  );
};

export default Cart;
