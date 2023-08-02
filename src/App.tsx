import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import { useAppDispatch, useAppSelector } from "./Redux/store/store";
import { closeAllShows } from "./Redux/reducers/globalStates";
import LoginModal from "./components/LoginModal/LoginModal";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Footer from "./components/Footer/Footer";

const App = (): JSX.Element => {
  const overlayStatus = useAppSelector(
    (state) => state.globalStates.isShowOverlay
  );

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const routers = useRoutes(routes);

  console.log(pathname.includes("courseDetails"));

  return (
    <>
      <div
        className={overlayStatus ? "overlay" : ""}
        onClick={() => dispatch(closeAllShows())}
      ></div>
      <NavbarDesktop />
      <NavbarMobile />
      <LoginModal />
      <main
        className={`${
          pathname.includes("courseDetails") ||
          pathname.includes("courses") ||
          pathname.includes("shopping-cart") ||
          pathname.includes("articles") ||
          pathname.includes("articlesDetails") ||
          pathname.includes("teachers") ||
          pathname.includes("teachersDetails")
            ? "bg-[#f8f9fa] "
            : ""
        }pb-24 sm:mt-20`}
      >
        {routers}
      </main>
      <Footer />
    </>
  );
};

export default App;
