import { Fragment } from "react";
import { Button, CounterButton } from "../components/Button";
import { Cart } from "../components/Cart";
import Icon_cart from "../assets/icon-cart.svg";
import { Product } from "../components/static/data";
import { useGlobalState } from "../components/custom/hooks";

export default function Home() {
  const [cartActive, setCartActive] = useGlobalState("cart");

  return (
    <Fragment>
      <section className="relative flex justify-center  py-[6rem] lg:py-[10rem] gap-4  lg:gap-24 lg:flex-row flex-col  lg:mx-4">
        <div className=" w-full lg:w-[30%]">
          <img
            src={Product[0].image}
            alt="product"
            className=" lg:rounded-2xl "
          />

          <div className="lg:grid grid-cols-4 lg:gap-3  py-6 hidden">
            {Product.map((value, key) => {
              return (
                <img
                  src={value.image}
                  alt="more-product"
                  className="rounded-xl  cursor-pointer hover:border-amber-600 hover:bg-opacity-50"
                  key={key}
                />
              );
            })}
          </div>
        </div>
        <div className="lg:w-[30%] mx-4">
          <div className="lg:mt-6 mt-2">
            <p className="uppercase font-semibold text-amber-600 leading-loose">
              Sneaker Company
            </p>
            <h3 className="text-4xl font-bold leading-tight">
              Fall Limited Edition <br />
              Sneakers
            </h3>
            <p className="text-gray-400 mt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur magni illum quam corporis commodi harum. Eum repellat
              autem commodi atque qui numquam. Corrupti recusandae reprehenderit
              rerum, facilis unde illum porro.
            </p>
            <div className="mt-2 relative ">
              <div className="font-bold text-2xl flex justify-between lg:flex-col items-center">
                $125.00{" "}
                <span className="bg-red-300 text-amber-600 text-xs absolute rounded-md left-24 p-1 ">
                  {" "}
                  50%
                </span>
                <p className="text-gray-400 text-sm">$250.00</p>
              </div>

              <div className="mt-6 lg:flex gap-x-2 justify-center items-center ">
                <CounterButton />
                <Button text="Add to Cart" icon={Icon_cart} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cartActive.cartToggle
              ? "absolute lg:right-40 top-32 w-full lg:w-auto"
              : "hidden"
          }
        >
          <Cart />
        </div>
      </section>
    </Fragment>
  );
}
