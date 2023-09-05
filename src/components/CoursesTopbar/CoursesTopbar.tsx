import { memo } from "react";
import { CoursesActionType, CoursesType } from "../../types/coursesInterface";
import { useAppSelector } from "../../Redux/store/store";

const CoursesTopbar = memo(
  ({
    displayMode,
    setDisplayMode,
    setPaginatedProduct,
    setIsSortedData,
    allCourses,
  }: {
    displayMode: string;
    setDisplayMode: React.Dispatch<CoursesActionType>;
    setPaginatedProduct: React.Dispatch<CoursesActionType>;
    setIsSortedData: React.Dispatch<CoursesActionType>;
    allCourses: CoursesType[];
  }): JSX.Element => {

    
    const listItems = [
      {
        id: crypto.randomUUID(),
        title: "مرتب‌سازی بر اساس محبوبیت",
        value: "popularity",
      },
      {
        id: crypto.randomUUID(),
        title: "مرتب‌سازی بر اساس امتیاز",
        value: "rating",
      },
      {
        id: crypto.randomUUID(),
        title: "مرتب‌سازی بر اساس آخرین",
        value: "date",
      },
      {
        id: crypto.randomUUID(),
        title: "مرتب‌سازی بر اساس ارزانترین",
        value: "cheapest",
      },
      {
        id: crypto.randomUUID(),
        title: "مرتب‌سازی بر اساس گرانترین",
        value: "expensive",
      },
    ];

    // const allCourses = useAppSelector((state) => state.courses.allCourses);

    const filteredInSelectBox = (
      event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
      const resultSelectValue = (event.target as HTMLSelectElement).value;

      if (resultSelectValue === "popularity") {
        setPaginatedProduct({
          type: "SET_PAGINATED_PRODUCT",
          payload: allCourses.filter(
            (course) => course.type === "programmingCourses"
          ),
        });
      } else {
        setPaginatedProduct({
          type: "SET_PAGINATED_PRODUCT",
          payload: allCourses.filter(
            (course) => course.sortType === resultSelectValue
          ),
        });
      }
      setIsSortedData({ type: "SET_ISSORTED_DATA", payload: true });
    };

    return (
      <section className="bg-white p-4 border border-fourth mt-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span
              className={`${
                displayMode === "row" ? "bg-primary" : "border border-fourth"
              } p-2 rounded-md hidden sm:block cursor-pointer`}
              onClick={() =>
                setDisplayMode({ type: "SET_DISPLAY_MODE", payload: "row" })
              }
            >
              <svg
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 20 20"
                xmlSpace="preserve"
                className={`w-6 h-6 ${
                  displayMode === "row" ? "fill-white" : "fill-[#495057]"
                } `}
              >
                <path d="M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"></path>
              </svg>
            </span>
            <span
              className={`${
                displayMode === "column" ? "bg-primary" : "border border-fourth"
              } p-2 rounded-md mr-4 hidden sm:block cursor-pointer`}
              onClick={() =>
                setDisplayMode({ type: "SET_DISPLAY_MODE", payload: "column" })
              }
            >
              <svg
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 20 20"
                xmlSpace="preserve"
                className={`w-6 h-6 ${
                  displayMode === "column" ? "fill-white" : "fill-[#495057]"
                } `}
              >
                <path d="M14.4 9H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h5.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm2 5H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM8.6 6h7.8c.552 0 .6-.447.6-1s-.048-1-.6-1H8.6c-.552 0-.6.447-.6 1s.048 1 .6 1zM5.4 9H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 5H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0-10H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1h1.8c.552 0 .6-.447.6-1s-.048-1-.6-1z"></path>
              </svg>
            </span>
          </div>

          <select
            className="w-full sm:w-auto p-3 pl-6 text-sm sm:mr-4 focus:outline-none border border-fourth appearance-none"
            onChange={filteredInSelectBox}
          >
            {listItems.map((item) => (
              <option key={item.id} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </section>
    );
  }
);

export default CoursesTopbar;
