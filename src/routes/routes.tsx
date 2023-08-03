import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import CartPage from "../pages/CartPage/CartPage";
import Articles from "../pages/Articles/Articles";
import ArticlesDetails from "../pages/ArticlesDetails/ArticlesDetails";
import Teachers from "../pages/Teachers/Teachers";
import TeachersDetails from "../pages/TeachersDetails/TeachersDetails";
import AboutUs from "../pages/AboutUs/AboutUs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courseDetails/:courseName", element: <CourseDetails /> },
  { path: "/create-account", element: <h1> ساخت حساب کاربری </h1> },
  { path: "/shopping-cart", element: <CartPage /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articlesDetails/:articleName", element: <ArticlesDetails /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/teachersDetails/:teachersName", element: <TeachersDetails /> },
  { path: "/about-us", element: <AboutUs /> },
];
export default routes;
