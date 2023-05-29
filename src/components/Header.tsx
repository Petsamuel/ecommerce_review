import { Fragment } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import image from "../assets/image-avatar.png";

export default function Header() {
  const Menu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <Fragment>
      <header className="flex justify-around items-center pt-8 fixed w-full z-[50] bg-white">
        <nav className="flex justify-between items-center border-b-2 w-full mx-24 relative ">
          <div className="flex relative items-center ">
            <img src={logo} alt="logo" className="mr-2" />
            {Menu.map((value: string | null, key: number | null) => (
              <div
                className="flex gap-5 ml-8 py-6 hover:border-amber-600 hover:border-b-2 cursor-pointer items-center"
                key={key}
              >
                {value}
              </div>
            ))}
          </div>

          <div className="flex gap-8  items-center">
            <div className="">
              <img src={cart} alt="cart" className="cursor-pointer" />
            </div>
            <div className="">
              <img
                src={image}
                alt="profile"
                className="w-12 cursor-pointer hover:border-amber-600 border-2 rounded-full"
              />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
