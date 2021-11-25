import "./cart.scss";
import { FiShoppingBag } from "react-icons/fi";
import CartCard from "../cards/cartCard";

const Cart = ({ openCart }) => {
  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <p onClick={openCart}>&#x2190;</p>
        <h2>
          Cart Items <FiShoppingBag />
        </h2>
      </div>

      <div className="cart-body">
        <CartCard />

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
