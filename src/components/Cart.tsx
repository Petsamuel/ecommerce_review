import { Fragment } from "react";
import { Button } from "./Button";
import deleteicon from "../assets/icon-delete.svg";
import { Product } from "./static/data";
import { useGlobalState } from "./custom/hooks";

export const Cart = () => {
  const [counter, setcounter] = useGlobalState("cart");

  const Calculation = () => {
    const val = 125.0;
    const answer = val * counter.counter;
    return answer;
  };
  const delection = () => {
    setcounter({ ...counter, isEmpty: true, counter: 0, cartToggle: false });
  };
  return (
    <Fragment>
      <div className=" flex flex-col w-[20rem]  relative bg-white shadow-2xl text-gray-400">
        <div className="border-b-[2px] ">
          <p className="font-semibold mx-4 text-sm py-2 mt-2 text-black">
            Cart
          </p>
        </div>
        <div className="flex justify-center h-full items-center">
          {!counter.isEmpty ? (
            <p className="text-gray-400 text-sm">Your Cart is empty.</p>
          ) : (
            <div className="flex px-2 gap-4 flex-col my-4">
              <div className="flex gap-3 items-center">
                <img
                  src={Product[0].image}
                  alt="product"
                  className=" rounded-md w-16"
                />

                <div>
                  <p className="text-sm">Fall Limited Edition Sneaker</p>
                  <p>
                    $125.00 x {counter.counter}= ${Calculation()}.00
                    <span className="font-bold text-black"></span>
                  </p>
                </div>
                <img
                  src={deleteicon}
                  alt="delete_icon"
                  className="h-auto w-3 cursor-pointer"
                  onClick={delection}
                />
              </div>
              <Button text="Checkout" icon={false} />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
