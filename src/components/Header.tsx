import { Fragment, useState } from "react";
import logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import image from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";

export default function Header() {
  const [active, setIsActive] = useState<boolean>(true);
  const [CartMenu, setCartMenu] = useState(false);
  const Menu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <Fragment>
      <header className="flex justify-around items-center pt-8 fixed w-full z-[50] bg-white">
        <nav className="flex justify-between items-center border-b-2 w-full mx-4 lg:mx-24 relative pb-6">
          <div className="flex relative items-center ">
            {active ? (
              <img src={logo} alt="logo" className="mr-2" />
            ) : (
              <img src={close} alt="logo" className="mr-2" />
            )}
            <ul className="bg-white h-screen w-[100%] lg:w-auto lg:h-auto lg:left-0 -left-8 top-0 absolute lg:relative lg:flex gap-5 ml-8  items-center">
              <div></div>
              {Menu.map((value: string | null, key: number | null) => (
                <li
                  className=" bg-white lg:my-auto z-20 lg:py-6 px-0 py-3 font-bold cursor-pointer text-sm lg:font-semi-bold lg:text-gray-400"
                  key={key}
                >
                  <a href="#" className="">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex lg:gap-8 gap-2 items-center">
            <div className="">
              <img src={Cart} alt="cart" className="cursor-pointer" />
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
