import { Fragment, useState } from "react";
import { Button, CounterButton } from "../components/Button";
import { Cart } from "../components/Cart";
import { Product } from "../components/static/data";
import { useGlobalState } from "../components/custom/hooks";
import icon_next from "../assets/icon-next.svg";
import icon_previous from "../assets/icon-previous.svg";

export const Home = () => {
  const [cartActive] = useGlobalState("cart");
  const [active, setActive] = useState<any>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [controller, setController] = useState(0);

  const Next = () => {
    if (controller < 4 || controller == 0) {
      setController(controller + 1);
    }
  };
  const Previous = () => {
    if (controller != 0) {
      setController(controller - 1);
    }
  };
  const ProductGrid = () => {
    return (
      <div className="lg:grid grid-cols-4 lg:gap-3  py-6 hidden">
        {Product.map((value, key) => {
          return (
            <div className="relative">
              <img
                src={value.image}
                alt="more-product"
                className={
                  imgIndex === key
                    ? "rounded-xl cursor-pointer border-[3px] border-[#ff7d1b] "
                    : "rounded-xl cursor-pointer hover:bg-opacity-50"
                }
                key={key}
                onMouseEnter={() => {
                  setImgIndex(key);
                }}
              />
              <div
                className={
                  imgIndex === key
                    ? "absolute rounded-xl bg-white  bg-opacity-50 h-full top-0 w-full border-[3px] border-[#ff7d1b] cursor-pointer"
                    : ""
                }
                onClick={() => {
                  setActive(value.image);
                  setImgIndex(key);
                }}
              >
                {" "}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const Controller = () => {
    return (
      <span className="absolute flex justify-between w-full items-center h-full">
        <div className="bg-white rounded-full p-2 lg:-ml-5" onClick={Next}>
          <img src={icon_previous} alt="next" className="p-2 cursor-pointer" />
        </div>
        <div className="bg-white rounded-full p-2 lg:-mr-5" onClick={Previous}>
          <img
            src={icon_next}
            alt="next"
            className="bg-white rounded-full p-2 cursor-pointer"
          />
        </div>
      </span>
    );
  };

  return (
    <Fragment>
      <section className="relative flex justify-center  py-[6rem] lg:py-[8rem] gap-4  lg:gap-24 lg:flex-row flex-col ">
        <div className="relative w-full lg:w-[30%]">
          <span className="lg:hidden">
            <Controller />
          </span>
          <img
            src={Product[0].image}
            alt="product"
            className=" lg:rounded-2xl "
          />

          <ProductGrid />
        </div>
        <div className="lg:w-[30%] mx-4 ">
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
              <div className="font-bold text-2xl flex justify-between lg:flex-col items-center lg:items-start">
                $125.00{" "}
                <span className="bg-red-300 text-amber-600 text-xs absolute rounded-md left-24 p-1 ">
                  {" "}
                  50%
                </span>
                <p className="text-gray-400 text-sm">$250.00</p>
              </div>

              <div className="mt-6 lg:flex gap-x-2 justify-center items-center ">
                <CounterButton />
                <Button text="Add to Cart" Icon={true} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cartActive.cartToggle
              ? "absolute lg:right-[8vw] top-32 lg:top-30 w-full lg:w-auto "
              : "hidden"
          }
        >
          <Cart />
        </div>
        <div
          className={
            active
              ? "overlay absolute h-full w-full bg-black top-0 z-50 bg-opacity-50 justify-center flex place-content-center items-center overflow-hidden "
              : "hidden"
          }
        >
          <div className=" relative w-[28%] items-center flex place-content-center flex-col">
            <div className="relative">
              <Controller />
              <img
                src={controller ? active : active}
                alt="selected"
                className="rounded-2xl  m-auto"
              />
            </div>

            <ProductGrid />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
