import { list } from "postcss";
import Modal from "../UI/modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="justify-end	">
        <span className="m-2">Total Amount</span>
        <span className="m-2">{totalAmount}</span>
      </div>
      <div>
        <button
          className="bg-orange-900	px-8 py-2 rounded-full m-2"
          onClick={props.onClose}
        >
          close
        </button>
        {hasItem && (
          <button className="bg-lime-900	px-8 py-2 rounded-full m-2	">
            order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
