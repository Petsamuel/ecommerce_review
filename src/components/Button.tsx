import { Fragment, useState } from "react";
import icon_plus from "../assets/icon-plus.svg";
import icon_minus from "../assets/icon-minus.svg";
import { useGlobalState } from "./custom/hooks";

type Buttons = {
  text: string;
  icon: boolean | any;
};

export const Button = ({ text, icon }: Buttons) => {
  const [cartToggle, setcartToggle] = useGlobalState("cart");
  const Toggle = () => {
    setcartToggle({
      ...cartToggle,
      cartToggle: !cartToggle.cartToggle,
    });
  };
  return (
    <Fragment>
      {icon ? (
        <button
          className="w-full bg-amber-600 py-3 m-2 rounded-xl justify-center flex items-center gap-4 text-white"
          onClick={Toggle}
        >
          <img src={icon} className="color-white " /> {text}
        </button>
      ) : (
        <button className="w-full bg-amber-600 py-3 m-2 rounded-xl justify-center flex items-center gap-4 text-white">
          <img className="color-white " /> {text}
        </button>
      )}
    </Fragment>
  );
};

export const CounterButton = () => {
  const [productNum, setProductNum] = useGlobalState("cart");

  const sub_from_cart = () => {
    switch (true) {
      case productNum.counter != 0:
        setProductNum({
          ...productNum,
          counter: productNum.counter - 1,
        });
        break;
      default:
        productNum.counter;
        setProductNum({ ...productNum, isEmpty: true });
        break;
    }
  };
  const add_to_cart = () => {
    switch (true) {
      case productNum.counter >= 0:
        setProductNum({
          ...productNum,
          counter: productNum.counter + 1,
        });
        break;
      default:
        productNum.counter;

        break;
    }
  };

  return (
    <Fragment>
      <div className="bg-gray-200 flex justify-around items-center w-3/6 py-3 m-2 rounded-lg">
        <img
          src={icon_minus}
          alt="sub"
          className="cursor-pointer"
          onClick={sub_from_cart}
        />
        {productNum.counter}
        <img
          src={icon_plus}
          alt="add"
          className="cursor-pointer"
          onClick={add_to_cart}
        />
      </div>
    </Fragment>
  );
};
