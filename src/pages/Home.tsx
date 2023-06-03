import { Fragment } from "react";
import { Button, CounterButton } from "../components/Button";
import product from "../assets/image-product-1.jpg";
import Product_thubnail from "../assets/image-product-1-thumbnail.jpg";
import Product_thubnail2 from "../assets/image-product-2-thumbnail.jpg";
import Product_thubnail3 from "../assets/image-product-3-thumbnail.jpg";
import Product_thubnail4 from "../assets/image-product-4-thumbnail.jpg";
import Icon_cart from "../assets/icon-cart.svg";

export default function Home() {
  const Products = [
    Product_thubnail,
    Product_thubnail2,
    Product_thubnail3,
    Product_thubnail4,
  ];
  console.log(Products);
  return (
    <Fragment>
      <section className="flex justify-center  py-[10rem]  gap-24 lg:flex-row flex-col lg:mx-0 mx-4">
        <div className=" w-full lg:w-[30%] relative ">
          <img src={product} alt="product" className=" rounded-2xl " />
          <div className="lg:grid grid-cols-4 gap-3  py-6 hidden">
            {Products.map((value, key) => {
              return (
                <img
                  src={value}
                  alt="more-product"
                  className="rounded-xl  cursor-pointer hover:border-amber-600 hover:bg-opacity-50"
                  key={key}
                />
              );
            })}
          </div>
        </div>
        <div className="lg:w-[30%]  ">
          <div className="mt-6">
            <p className="uppercase font-semibold text-amber-600 leading-loose">
              Sneaker Company
            </p>
            <h3 className="text-4xl font-bold leading-tight">
              Fall Limited Edition <br />
              Sneakers
            </h3>
            <p className="text-gray-400 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur magni illum quam corporis commodi harum. Eum repellat
              autem commodi atque qui numquam. Corrupti recusandae reprehenderit
              rerum, facilis unde illum porro.
            </p>
            <div className="mt-2 relative ">
              <p className="font-bold text-2xl">
                $125.00{" "}
                <span className="bg-red-300 text-amber-600 text-xs absolute rounded-md left-24 p-1 ">
                  {" "}
                  50%
                </span>
              </p>
              <p className="">$250.00</p>
              <div className="mt-6 lg:flex gap-x-2 justify-center items-center">
                <CounterButton value={4} />
                <Button text="Add to Cart" icon={Icon_cart} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
