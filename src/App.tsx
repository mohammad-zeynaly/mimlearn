import { useRoutes } from "react-router-dom";
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

  const dispatch = useAppDispatch();

  const routers = useRoutes(routes);

  return (
    <>
      <div
        className={overlayStatus ? "overlay" : ""}
        onClick={() => dispatch(closeAllShows())}
      ></div>
      <NavbarDesktop />
      <NavbarMobile />
      <LoginModal />
      {routers}
      <Footer />
    </>
  );
};

export default App;
