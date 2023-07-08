import { Link } from "react-router-dom";
import { useAppDispatch } from "../../Redux/store/store";
import { isShowShoppingCartHandler } from "../../Redux/reducers/globalStates"


const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="nav mt-5">
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
              <li className="mr-5">
                <Link className="text-primary" to="/">
                  صفحه نخست
                </Link>
              </li>
              <li className="mr-5">
                <Link to=""> دوره ها </Link>
              </li>
              <li className="mr-5">
                <Link to=""> وبلاگ </Link>
              </li>
              <li className="mr-5">
                <Link to=""> تماس با ما </Link>
              </li>
              <li className="mr-5">
                <Link to=""> درباره ما </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              className="bg-[rgba(0,0,0,.08)] p-3 rounded-md ml-4 relative"
              onClick={() => dispatch(isShowShoppingCartHandler())}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#343a40"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="bg-primary absolute bottom-2 right-1 text-white text-sm w-4 h-4 rounded-full">
                0
              </span>
            </button>
            <button className="bg-primary text-white flex items-center p-3 rounded-lg">
              <svg className="fill-white" height="1em" viewBox="0 0 640 512">
                <path d="M224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1.1-4.2.3-6.3-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"></path>
              </svg>
              <span className="pr-2">ورود و ثبت نام</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
