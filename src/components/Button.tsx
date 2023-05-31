import { Fragment } from "react";
import icon_plus from "../assets/icon-plus.svg";
import icon_minus from "../assets/icon-minus.svg";

type Buttons = {
  text: string;
  icon: string;
};
type Counter = {
  value: number;
};
export const Button = ({ text, icon }: Buttons) => {
  return (
    <Fragment>
      <button className="w-full bg-amber-600 py-3 m-2 rounded-xl justify-center flex items-center gap-4 text-white">
        <img src={icon} className="color-white " />{" "}
        {text}
      </button>
    </Fragment>
  );
};

export const CounterButton = ({ value }: Counter) => {
  return (
    <Fragment>
      <div className="bg-gray-200 flex justify-around items-center w-3/6 py-3 m-2 rounded-lg">
        <img src={icon_minus} alt="add" />
        {value}
        <img src={icon_plus} alt="remove" />
      </div>
    </Fragment>
  );
};