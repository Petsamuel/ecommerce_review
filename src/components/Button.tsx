import { Fragment } from "react";
import icon_plus from "../assets/icon-plus.svg";
import icon_minus from "../assets/icon-minus.svg";
import { useGlobalState } from "./custom/hooks";

type Buttons = {
  text: string;
  Icon: boolean | any;
};

export const Button = ({ text, Icon }: Buttons) => {
  const [cartToggle, setcartToggle] = useGlobalState("cart");
  const Toggle = () => {
    setcartToggle({
      ...cartToggle,
      add: true,
      isEmpty: false,
    });
  };

  return (
    <Fragment>
      {Icon ? (
        <button
          className="w-full bg-[#ff7d1b] py-3 m-2 rounded-xl justify-center flex items-center gap-4 text-white shadow-xl shadow-[#ff7e1b60] drop-shadow-md "
          onClick={Toggle}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fill-rule="initial"
            />
          </svg>

          {text}
        </button>
      ) : (
        <button
          className="w-full bg-[#ff7d1b] py-3 m-2 rounded-xl justify-center flex items-center gap-4 text-white"
          style={{ fill: "white" }}
        >
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
      <div className="bg-gray-100 flex justify-around items-center lg:w-3/6 py-4 m-2 rounded-lg w-full">
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
