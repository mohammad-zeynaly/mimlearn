import { useEffect, useReducer } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CoursesTopbar from "../../components/CoursesTopbar/CoursesTopbar";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";
import AllCourses from "../../components/AllCourses/AllCourses";
import { useAppSelector } from "../../Redux/store/store";
import CoursePagination from "../../components/CoursePagination/CoursePagination";
import { reducer, initialState } from "./coursesReducer";

const Courses = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pageSize = 6;

  const allCourses = useAppSelector((state) => state.courses.allCourses);

  const filteredProductByPrice = () => {
    dispatch({
      type: "SET_PRISE_RANGE",
      payload: state.filteredPricePercent * 40_000,
    });
    dispatch({ type: "SET_ISSORTED_DATA", payload: false });
  };

  let filteredProduct = allCourses;

  if (state.priceRange && state.priceRange > 0) {
    filteredProduct = allCourses.filter(
      (product) => product.price! < state.priceRange
    );
  } else {
    filteredProduct = allCourses.filter((product) => product.price! > 0);
  }

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
          Array.from(
            Array(Math.ceil(state.paginatedProduct?.length / pageSize)).keys()
          )
        ),
      });

      dispatch({
        type: "SET_PAGINATED_PRODUCT",
        payload: state.paginatedProduct,
      });
    }
  }, [state.currentPage, state.priceRange, state.isSortedData, allCourses]);

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
              displayMode={state.displayMode}
              setDisplayMode={dispatch}
              setPaginatedProduct={dispatch}
              setIsSortedData={dispatch}
            />
            <AllCourses
              displayMode={state.displayMode}
              filteredProduct={state.paginatedProduct}
            />
            {state.paginatedProduct.length < 1 && (
              <p className="text-center text-primary text-lg">
                محصولی با این قیمت وجود ندارد
              </p>
            )}
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
