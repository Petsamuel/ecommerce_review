import { Fragment } from "react";
import { Button } from "./Button";
import deleteicon from "../assets/icon-delete.svg";

type CartOption = {
  counter: number;
  active: boolean;
};

export const Cart = ({ counter, active }: CartOption) => {
  return (
    <Fragment>
      <div className=" flex flex-col w-[15rem] h-[12rem] relative bg-white shadow-2xl ">
        <div className="border-b-[2px] ">
          <p className="font-semibold mx-4 text-sm py-2 mt-2">Cart</p>
        </div>
        <div className="flex justify-center h-full items-center">
          {active ? (
            <p className="text-gray-400 text-sm">Your Cart is empty.</p>
          ) : (
            <div className="flex gap-3">
              <div></div>
              <div>
                <p>Fall Limited Edition Sneaker</p>
                <p>$125.00 x {counter}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
