import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      className="bg-red-900	px-8 py-2 rounded-full"
      onClick={props.onClick}
    >
      <span className="w-2.5 h-2.5">{/* <CartIcon /> */}</span>
      <span className="text-neutral-50	">Your Cart </span>
      <span className="text-neutral-50	">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
