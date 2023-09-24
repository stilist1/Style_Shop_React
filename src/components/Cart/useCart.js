import { useContext } from "react";
import { CartContext } from "./CartProvider";

export const useCartHook = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return { cartItems, addToCart, removeFromCart };
};
