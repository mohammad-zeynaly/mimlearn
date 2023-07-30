import { Link, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../Redux/store/store";
import {
  isShowShoppingCartHandler,
  isShowLoginFormHandler,
} from "../../Redux/reducers/globalStates";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Button from "../Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavbarDesktop = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <nav
        className="nav py-4 bg-white fixed top-0 left-0 right-0 z-30 hidden lg:block shadow-[0_0.125rem_0.25rem_rgba(0,0,0,.075)]"
        id="desktop-nav"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="w-32 object-cover"
                  src="./assets/images/logo-default.png"
                  alt="لوگو سایت"
                />
              </Link>
              <ul className="flex items-center font-vazirMedium">
                <li className="lg:mr-5">
                  <NavLink className="menu__link" to="/">
                    صفحه نخست
                  </NavLink>
                </li>
                <li className="mr-5">
                  <NavLink className="menu__link" to="/courses">
                    دوره ها
                  </NavLink>
                </li>
                <li className="mr-5">
                  <NavLink className="menu__link" to="/articles">
                    مقالات
                  </NavLink>
                </li>
                <li className="mr-5">
                  <NavLink className="menu__link" to="/contact-us">
                    تماس با ما
                  </NavLink>
                </li>
                <li className="mr-5">
                  <NavLink className="menu__link" to="/about-us">
                    درباره ما
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button
                className="bg-[rgba(0,0,0,.08)] p-3 rounded-md ml-4 relative"
                onClick={() => dispatch(isShowShoppingCartHandler())}
              >
                <HiOutlineShoppingBag className="w-6 h-6 text-[#343a40]" />

                <span className="bg-primary absolute bottom-2 right-1 text-white text-sm w-4 h-4 rounded-full">
                  0
                </span>
              </button>
              <Button
                onClick={() => dispatch(isShowLoginFormHandler())}
                className="bg-primary text-white flex items-center p-3 rounded-lg"
              >
                <svg className="fill-white" height="1em" viewBox="0 0 640 512">
                  <path d="M224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1.1-4.2.3-6.3-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"></path>
                </svg>
                <span className="pr-2">ورود و ثبت نام</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <ShoppingCart />
    </>
  );
};

export default NavbarDesktop;
