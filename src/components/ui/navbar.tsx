import { useState } from "react";
import { navItems } from "../../data/constants/navitems";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close.png";
import menuIcon from "../../assets/icons/menu.png";
import Button from "./button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();
  return (
    <div className="w-full bg-primary flex justify-between items-center h-20 px-12 gap-12 font-poppins">
      {/* Logo */}
      <div className="flex justify-start items-center gap-12">
        <h1 className="text-xl font-semibold text-black">
          Medical Certificate
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-start items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(`${item.path}`)}
              className=" hover:text-green rounded-xl cursor-pointer duration-300 text-black font-semibold"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={() => navigate("/login")} className="hidden lg:block">
        Login
      </Button>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block lg:hidden w-[40px] h-[40px]">
        {nav ? (
          <img src={closeIcon} alt="close" />
        ) : (
          <img src={menuIcon} alt="close" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "px-12 py-8 fixed lg:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 flex flex-col gap-8"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-semibold text-black">
          Medical Certificate
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate(`${item.path}`)}
            className=" hover:text-green rounded-xl cursor-pointer duration-300 text-black font-semibold text-xl"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
