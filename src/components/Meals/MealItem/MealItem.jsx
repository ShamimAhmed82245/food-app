import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex flex-row justify-between border-b border-zinc-900 my-2		">
      <div>
        <h3 className="text-lg	font-bold	">{props.name}</h3>
        <div className="text-base	text-gray-500	">{props.description}</div>
        <div className="text-lg	font-bold  text-amber-700 mb-2">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
