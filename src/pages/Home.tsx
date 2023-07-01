import { Fragment, useState, useEffect } from "react";
import { Button, CounterButton } from "../components/Button";
import { Cart } from "../components/Cart";
import { Product } from "../components/static/data";
import { useGlobalState } from "../components/custom/hooks";

export const Home = () => {
  const [cartActive] = useGlobalState("cart");
  const [active, setActive] = useState<any>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [controller, setController] = useState(0);
  const [product, setProduct] = useState<string>();
  const [overlay, setOverlay] = useState(false);

  const Next = () => {
    if (controller < 4 || controller != 0) {
      setController(controller + 1);
    }
    if (controller == 4) {
      setController(0);
    }
  };
  const Previous = () => {
    if (controller != 0) {
      setController(controller - 1);
    }
  };
  useEffect(() => {
    switch (true) {
      case controller == 1:
        setProduct(Product[1].image);
        setActive(Product[1].image);

        break;
      case controller == 2:
        setProduct(Product[2].image);
        setActive(Product[2].image);

        break;
      case controller == 3:
        setProduct(Product[3].image);
        setActive(Product[3].image);

        break;
      default:
        setProduct(Product[0].image);
        setActive(Product[0].image);

        break;
    }
  }, [controller]);

  const ProductGrid = () => {
    return (
      <div className="lg:grid grid-cols-4 lg:gap-6  py-6 hidden">
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
                  // setOverlay(!overlay);
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
                  setOverlay(!overlay);
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
      <span className="absolute flex justify-between w-full items-center h-[90%]">
        <div
          className="bg-white rounded-3xl p-2 lg:-ml-5 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={Previous}
        >
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div
          className="bg-white rounded-full p-2 lg:-mr-5 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={Next}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </span>
    );
  };

  return (
    <Fragment>
      <section className="relative flex justify-center  py-[3rem]  lg:h-screen lg:py-[7rem] gap-4  lg:gap-24 lg:flex-row flex-col">
        <div className="relative w-full lg:w-[30%] ">
          <span className="lg:hidden">
            <Controller />
          </span>
          <span className=" lg:flex hidden ">
            <img
              src={Product[0].image}
              alt="product"
              className=" lg:rounded-2xl "
            />
          </span>
          <span className="lg:hidden">
            <img
              src={product ? product : Product[0].image}
              alt="product"
              className=" lg:rounded-2xl "
            />
          </span>

          <ProductGrid />
        </div>
        <div className="lg:w-[30%] mx-4 my-20">
          <div className="lg:mt-6 mt-2">
            <p className="uppercase font-semibold text-[#ff7d1b] leading-loose">
              Sneaker Company
            </p>
            <h3 className="text-4xl font-bold leading-tight">
              Fall Limited Edition <br />
              Sneakers
            </h3>
            <p className="text-gray-400 mt-6 w-[24em]">
              This low profile are your perfect casual wear companion, Featuring
              a durable rubber outer sole. they'll withtand everything the
              weather can offer
            </p>
            <div className="mt-2 relative ">
              <div className="font-bold text-2xl flex justify-between lg:flex-col items-center lg:items-start">
                $125.00{" "}
                <span className="bg-red-50 text-[#ff7d1b]  text-xs absolute rounded-md left-24 p-1 ">
                  {" "}
                  50%
                </span>
                <p className="text-gray-400 text-sm line-through">$250.00</p>
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
            overlay
              ? "overlay absolute h-full w-full  bg-black top-0 z-50 bg-opacity-80 justify-center flex place-content-center items-center overflow-hidden "
              : "hidden"
          }
        >
          <div className=" relative w-[28%] items-center flex place-content-center flex-col ">
            <div className="relative">
              <div
                className="flex justify-end py-5 cursor-pointer "
                onClick={() => {
                  setOverlay(!overlay);
                }}
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#ff7d1b"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <Controller />
              <img
                src={active || product}
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
