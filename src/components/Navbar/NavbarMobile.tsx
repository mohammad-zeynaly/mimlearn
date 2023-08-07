import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";
import {
  isShowShoppingCartHandler,
  isShowLoginFormHandler,
  isShowMobileMenuHandler,
} from "../../Redux/reducers/globalStates";
import Button from "../Button/Button";
import { BsInstagram, BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavbarMobile = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const mobileMenuStatus = useAppSelector(
    (state) => state.globalStates.isShowMobileMenu
  );

  const allCartProduct = useAppSelector((state) => state.courses.basketProduct);

  return (
    <>
      <nav
        className="block lg:hidden py-4 fixed top-0 left-0 z-30 right-0 bg-white shadow-[0_0.125rem_0.25rem_rgba(0,0,0,.075)]"
        id="mobile-nav"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                className="w-28 "
                src="../assets/images/logo-default.png"
                alt="لوگو سایت"
              />
            </Link>
            <div className="flex items-center">
              <Button
                className="bg-[rgba(0,0,0,.08)] p-3 rounded-md ml-3 sm:ml-4 relative"
                onClick={() => dispatch(isShowShoppingCartHandler())}
              >
                <HiOutlineShoppingBag className="w-6 h-6 text-[#343a40]" />

                <span className="bg-primary absolute bottom-2 right-1 text-white text-sm w-4 h-4 rounded-full">
                  {allCartProduct.length}
                </span>
              </Button>
              <Button
                className="bg-[rgba(0,0,0,.08)] p-3 rounded-md ml-3 sm:ml-4 relative"
                onClick={() => dispatch(isShowLoginFormHandler())}
              >
                <svg
                  className="fill-[#696b6a] w-6 h-6"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1.1-4.2.3-6.3-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"></path>
                </svg>
              </Button>
              <Button
                className="bg-[rgba(0,0,0,.08)] w-12 h-12 rounded-md  relative flex justify-center items-center transition-transform duration-250"
                onClick={() => dispatch(isShowMobileMenuHandler())}
              >
                {mobileMenuStatus ? (
                  <>
                    <span className="block w-5 h-[2px] bg-black absolute top-4 translate-y-2 rotate-45"></span>
                    <span className="block w-5 h-[2px] bg-black absolute bottom-4 -translate-y-[6px] -rotate-45"></span>
                  </>
                ) : (
                  <>
                    <span className="block w-5 h-[2px] bg-black absolute top-4"></span>
                    <span className="block w-5 h-[2px] bg-black"></span>
                    <span className="block w-5 h-[2px] bg-black absolute bottom-4"></span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`bg-[#212529] text-white fixed top-0 bottom-0 ${
          mobileMenuStatus ? "right-0" : "-right-80"
        } z-50 w-72 sm:w-80 transition-all duration-250`}
      >
        <ul className="flex flex-col p-4 my-4">
          <li className="mb-4">
            <Link to="/">صفحه نخست</Link>
          </li>
          <li className="mb-4">
            <Link to="/courses"> دوره ها </Link>
          </li>
          <li className="mb-4">
            <Link to="/articles"> مقالات </Link>
          </li>
          <li className="mb-4">
            <Link to="/teachers"> مدرسین </Link>
          </li>
          <li className="mb-4">
            <Link to="/contact-us"> تماس با ما</Link>
          </li>
          <li className="">
            <Link to="/about-us"> درباره ما </Link>
          </li>
        </ul>
        <div className="border-t border-solid border-[#2c3237] p-4 flex items-center justify-evenly pt-8">
          <BsInstagram className="w-4 h-4" />
          <BsTelegram className="w-4 h-4" />
          <BsFacebook className="w-4 h-4" />
          <BsTwitter className="w-4 h-4" />
          <SiAparat className="w-4 h-4" />
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
