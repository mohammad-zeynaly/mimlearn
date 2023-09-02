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
  const [isSortedData, setIsSortedData] = useState<boolean>(false);
  const pageSize = 6;

  const filteredProductByPrice = () => {
    setPriceRange(filteredPricePercent * 40_000);
    setIsSortedData(false);
  };

  const allProducts = allData.filter((product) => product.price! > 0);

  let filteredProduct = allProducts;

  if (priceRange && priceRange > 0) {
    filteredProduct = allData.filter((product) => product.price! < priceRange);
  } else {
    filteredProduct = allData.filter((product) => product.price! > 0);
  }

  useEffect(() => {
    if (isSortedData === false) {
      const endProductIndex = currentPage * pageSize;
      const startProductIndex = endProductIndex - pageSize;
      setPaginatedProduct(
        filteredProduct.slice(startProductIndex, endProductIndex)
      );

      setPageNumbers(
        Array.from(Array(Math.ceil(filteredProduct.length / pageSize)).keys())
      );
    } else {
      setPageNumbers(
        Array.from(Array(Math.ceil(paginatedProduct.length / pageSize)).keys())
      );
      setPaginatedProduct(paginatedProduct);
    }
  }, [currentPage, priceRange, isSortedData]);

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
                src="./assets/images/banner.webp"
                alt="محل تبلیغ"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <CoursesTopbar
              displayMode={displayMode}
              setDisplayMode={setDisplayMode}
              setPaginatedProduct={setPaginatedProduct}
              setIsSortedData={setIsSortedData}
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
