import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="bg-red-700	flex flex-row justify-between	items-center	px-2.5 h-20	fixed w-full	top-0	left-0	z-10	">
        <h1 className="text-neutral-50	font-bold ">ReactMeal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-screen h-96	z-0 overflow-hidden start-0	">
        <img
          className="w-screen start-0 h-full	object-cover 	origin-bottom  -translate-y-16	-translate-x-4		-rotate-3"
          src={mealsImage}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Header;
