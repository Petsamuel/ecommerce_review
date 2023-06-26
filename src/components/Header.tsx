import { Fragment, useState } from "react";
import logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import iconMenu from "../assets/icon-menu.svg";
import image from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { useGlobalState } from "./custom/hooks";

export default function Header() {
  const [active] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState(false);
  const [cart_count, setcart_count] = useGlobalState("cart");
  const Menu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <Fragment>
      <header
        className={
          "flex justify-around items-center pt-8 fixed w-full z-50 bg-white "
        }
      >
        <nav className="flex justify-between items-center border-b-2 w-full mx-4 lg:mx-24 relative pb-6 ">
          <div className="flex relative items-center ">
            <div className="flex gap-4 items-center">
              <img
                src={iconMenu}
                alt="menu"
                className="lg:hidden"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
              />
              <img src={logo} alt="logo" className="mr-2" />
            </div>

            <ul
              className={
                activeMenu
                  ? "bg-white h-screen w-[180%] lg:w-auto lg:h-auto lg:left-0 -left-4 -top-12 lg:top-0 absolute lg:relative lg:flex gap-5 lg:ml-8  items-center z-40"
                  : "hidden h-screen  lg:w-auto lg:h-auto lg:left-0  lg:relative lg:flex gap-5 lg:ml-8  items-center z-40"
              }
            >
              <img
                src={close}
                alt="close-menu"
                className="z-50 px-10 py-10 lg:hidden"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
              />
              {Menu.map((value: any, key: number) => (
                <li
                  className=" bg-white lg:my-auto z-20 lg:py-4 lg:px-6 px-10 py-3 font-bold cursor-pointer text-sm lg:font-semi-bold lg:text-gray-400 "
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
            <div className="relative">
              <img
                src={Cart}
                alt="cart"
                className="cursor-pointer"
                onClick={() => {
                  setcart_count({
                    ...cart_count,
                    cartToggle: !cart_count.cartToggle,
                  });
                }}
              />
              <div className="absolute bg-orange-400 rounded-2xl text-white px-[2px] text-sm top-[-10px] right-[-8px]">
                {cart_count.add && cart_count.counter != 0
                  ? cart_count.counter
                  : ""}
              </div>
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
        <div
          className={
            activeMenu
              ? "absolute bg-black bg-opacity-50 w-full h-[100em] z-20"
              : ""
          }
        >
          {" "}
        </div>
      </header>
    </Fragment>
  );
}
