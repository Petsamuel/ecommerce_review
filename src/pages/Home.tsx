import { Fragment } from "react";
import product from "../assets/image-product-1.jpg";

export default function Home() {
  return (
    <Fragment>
      <section className="flex justify-center  py-48  gap-24">
        <div className="w-[30%] relative">
          <img src={product} alt="product" className=" rounded-2xl " />
        </div>
        <div className="w-[30%]">
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
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
