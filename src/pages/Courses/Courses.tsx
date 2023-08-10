import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CoursesTopbar from "../../components/CoursesTopbar/CoursesTopbar";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";
import AllCourses from "../../components/AllCourses/AllCourses";
import allData from "../../data/allData";
import { CoursesType } from "../../types/coursesInterface";
import CoursePagination from "../../components/CoursePagination/CoursePagination";

const Courses = (): JSX.Element => {
  const [displayMode, setDisplayMode] = useState<string>("row");
  const [filteredPricePercent, setFilteredPricePercent] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number>();
  const [paginatedProduct, setPaginatedProduct] = useState<CoursesType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<number[]>();
  const pageSize = 6;

  const filteredProductByPrice = () => {
    setPriceRange(filteredPricePercent * 40_000);
  };

  const allProducts = allData.filter((product) => product.price! > 0);

  let filteredProduct = allProducts;

  if (priceRange && priceRange > 0) {
    filteredProduct = allData.filter((product) => product.price! < priceRange);
  } else {
    filteredProduct = allData.filter((product) => product.price! > 0);
  }

  function shownProductPaginated() {
    const endProductIndex = currentPage * pageSize;
    const startProductIndex = endProductIndex - pageSize;
    setPaginatedProduct(
      filteredProduct.slice(startProductIndex, endProductIndex)
    );

    if (filteredProduct) {
      setPageNumbers(
        Array.from(Array(Math.ceil(filteredProduct.length / pageSize)).keys())
      );
    }
  }

  useEffect(() => {
    shownProductPaginated();
  }, [currentPage, filteredProduct]);

  useEffect(() => {
    setPaginatedProduct([]);
    setCurrentPage(1);
    shownProductPaginated();
  }, [filteredPricePercent]);

  return (
    <>
      <Breadcrumb title="فروشگاه" currentPage="فروشگاه" />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 ">
          <div className="w-full lg:w-1/4 hidden lg:block sticky top-0 overflow-y-hidden">
            <FilterByPrice
              filteredProductByPrice={filteredProductByPrice}
              filteredPricePercent={filteredPricePercent}
              setFilteredPricePercent={setFilteredPricePercent}
            />
            <div className="border border-fourth mt-5">
              <img
                className="w-full object-cover"
                src="./assets/images/banner.png"
                alt="محل تبلیغ"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <CoursesTopbar
              displayMode={displayMode}
              setDisplayMode={setDisplayMode}
            />
            <AllCourses
              displayMode={displayMode}
              filteredProduct={paginatedProduct}
            />
            <div className="flex justify-center gap-4">
              <CoursePagination
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
        <div className="w-3/4"></div>
        <div className="lg:hidden">
          <FilterByPrice
            filteredProductByPrice={filteredProductByPrice}
            filteredPricePercent={filteredPricePercent}
            setFilteredPricePercent={setFilteredPricePercent}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
