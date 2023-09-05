import { useState, useEffect, useReducer } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CoursesTopbar from "../../components/CoursesTopbar/CoursesTopbar";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";
import AllCourses from "../../components/AllCourses/AllCourses";
import { useAppSelector } from "../../Redux/store/store";
import CoursePagination from "../../components/CoursePagination/CoursePagination";
import { reducer, initialState } from "./coursesReducer";
import { getAllCourses } from "../../services/educationalServices";
import { CoursesType } from "../../types/coursesInterface";

const Courses = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filteredProduct, setFilteredProduct] = useState<CoursesType[]>([]);
  const [allCourses, setAllCourses] = useState<CoursesType[]>([]);
  const pageSize = 6;

  let courses = useAppSelector((state) => state.courses.allCourses);
  useEffect(() => {
    setAllCourses(courses);
    const fetchData = async () => {
      if (allCourses.length > 0) {
        setFilteredProduct(allCourses);
        console.log("allCourses.length > 0=> ", allCourses.length);
      } else {
        const response = await getAllCourses();
        setFilteredProduct(response.data);
        setAllCourses(response.data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (state.priceRange && state.priceRange > 0) {
        setFilteredProduct(
          allCourses.filter((product) => product.price! < state.priceRange)
        );
      } else {
        setFilteredProduct(allCourses.filter((product) => product.price! > 0));
      }
    };

    filterProducts();
  }, [state.priceRange, allCourses]);

  const filteredProductByPrice = () => {
    dispatch({
      type: "SET_PRISE_RANGE",
      payload: state.filteredPricePercent * 40000,
    });
    dispatch({ type: "SET_ISSORTED_DATA", payload: false });
  };

  useEffect(() => {
    console.log("isSortedData=> ", state.isSortedData);
    if (state.isSortedData === false) {
      const endProductIndex = state.currentPage * pageSize;
      const startProductIndex = endProductIndex - pageSize;

      dispatch({
        type: "SET_PAGINATED_PRODUCT",
        payload: filteredProduct.slice(startProductIndex, endProductIndex),
      });

      dispatch({
        type: "SET_PAGE_NUMBERS",
        payload: Array.from(
          Array(Math.ceil(filteredProduct.length / pageSize)).keys()
        ),
      });
    } else {
      console.log("state.paginatedProduct?.length=> ", state.paginatedProduct);
      dispatch({
        type: "SET_PAGE_NUMBERS",
        payload: Array.from(
          Array(Math.ceil(state.paginatedProduct?.length / pageSize)).keys()
        ),
      });

      dispatch({
        type: "SET_PAGINATED_PRODUCT",
        payload: state.paginatedProduct,
      });
    }
  }, [
    state.currentPage,
    state.priceRange,
    state.isSortedData,
    filteredProduct,
  ]);

  return (
    <>
      <Breadcrumb title="فروشگاه" currentPage="فروشگاه" />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 ">
          <div className="w-full lg:w-1/4 hidden lg:block sticky top-0 overflow-y-hidden">
            <FilterByPrice
              filteredProductByPrice={filteredProductByPrice}
              filteredPricePercent={state.filteredPricePercent}
              setFilteredPricePercent={dispatch}
            />
            <div className="border border-fourth mt-5">
              <img
                className="w-full object-cover"
                src="./assets/images/banner.webp"
                alt="محل تبلیغ"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <CoursesTopbar
              allCourses={allCourses}
              displayMode={state.displayMode}
              setDisplayMode={dispatch}
              setPaginatedProduct={dispatch}
              setIsSortedData={dispatch}
            />
            <AllCourses
              displayMode={state.displayMode}
              filteredProduct={state.paginatedProduct}
            />
            {state.paginatedProduct.length < 1 || filteredProduct.length < 1 ? (
              <p className="text-center text-primary text-lg">
                محصولی با این قیمت وجود ندارد
              </p>
            ) : null}
            <div className="flex justify-center gap-4">
              <CoursePagination
                currentPage={state.currentPage}
                pageNumbers={state.pageNumbers}
                setCurrentPage={dispatch}
              />
            </div>
          </div>
        </div>
        <div className="w-3/4"></div>
        <div className="lg:hidden">
          <FilterByPrice
            filteredProductByPrice={filteredProductByPrice}
            filteredPricePercent={state.filteredPricePercent}
            setFilteredPricePercent={dispatch}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
