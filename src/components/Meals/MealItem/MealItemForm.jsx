import { useContext, useRef, useState } from "react";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amoutInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amoutInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    //console.log(props);
    if (
      enteredAmount.trim().length == 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="text-right	" onSubmit={onSubmitHandler}>
      <Input
        ref={amoutInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-orange-800 rounded-full  px-5	py-1 mt-2 text-white	font-bold  text-center	">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
