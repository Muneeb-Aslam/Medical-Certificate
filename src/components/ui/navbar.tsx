import Button from "./button";
import { navItems } from "../../data/constants/navitems";
import { INavItem } from "../../@types";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <img src="" alt="" className="" />
        <ul>
          {navItems?.map((item: INavItem) => (
            <li key={item.name} onClick={() => navigate(item.path)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Button type="button" onClick={() => navigate("/login")}>
        Sign In
      </Button>
    </nav>
  );
};

export default NavBar;
