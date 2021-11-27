import { createContext, useState } from "react";
export const cartContext = createContext();

const CartDataContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const isSelected = cartItems.find((cart) => cart.id === item.id);
    if (isSelected) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id
            ? { ...isSelected, qty: isSelected.qty + 1 }
            : cart
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onDecrease = (item) => {
    const isSelected = cartItems.find((cart) => cart.id === item.id);
    if (isSelected) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id
            ? { ...isSelected, qty: isSelected.qty === 1 ? 1 : isSelected.qty - 1 }
            : cart
        )
      );
    }
  }

  const onRemove = (item) => {
    const isSelected = cartItems.filter((cart) => cart.id !== item.id);
    setCartItems(isSelected)
  }

  return (
    <cartContext.Provider value={{ cartItems, onAdd, onDecrease, onRemove }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartDataContext;
