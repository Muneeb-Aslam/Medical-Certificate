import Button from "./button";
import { navItems } from "../../data/constants/navitems";
import { INavItem } from "../../@types";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-20 px-20 bg-primary flex justify-between items-center shadow-inner shadow-b-2xl">
      <div className="flex justify-start items-center gap-12">
        <img src="" alt="" className="w-[40px] h-full" />
        <ul className="flex justify-between items-center gap-8">
          {navItems?.map((item: INavItem) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className="font-poppins text-md font-semibold text-black hover:text-green"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Button type="button" onClick={() => navigate("/login")}>
        Login
      </Button>
    </nav>
  );
};

export default NavBar;
