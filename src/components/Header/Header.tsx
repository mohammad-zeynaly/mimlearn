import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import Button from "../Button/Button";
import Input from "../Input/Input";
import LoadingBar from "../LoadingBar/LoadingBar";
import HeaderInformation from "../HeaderInformation/HeaderInformation";
import debounce from "../../functions/debounce";
import { CoursesType } from "../../types/coursesInterface";
import { Link } from "react-router-dom";
import {useAppSelector} from "../../Redux/store/store"

const Header = (): JSX.Element => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchFilteredCourse, setSearchFilteredCourse] = useState<
    CoursesType[]
  >([]);
  const [searchInputCharacter, setSearchInputCharacter] = useState<string>("");
  const [responseQuery, setResponseQuery] = useState<boolean>();

  const allCourses = useAppSelector(state => state.courses.allCourses)

  const searchUserQuery = (): void => {
    let searchInputValue = (searchInputRef.current as HTMLInputElement).value;
    setSearchInputCharacter(searchInputValue);

    // login codes
    setSearchFilteredCourse(
      allCourses.filter((course) =>
        course.title?.toLowerCase()?.includes(searchInputValue.toLowerCase())
      )
    );
    setResponseQuery(false);
    setTimeout(() => {
      setResponseQuery(true);
    }, 1500);
  };

  const debounceSearchUserQuery = debounce(searchUserQuery, 1000);

  return (
    <header id="header" className="mt-[5.5rem] sm:mt-28">
      <div className="w-full h-[650px] sm:h-[625px] bg-[url('./assets/images/header-bg.jpg')] -z-10 bg-cover absolute top-0 "></div>
      <div className="bg-video w-full h-[650px] absolute top-0 -z-10">
        <video
          loop
          autoPlay
          muted
          src="./assets/videos/header-bg-video.mp4"
          className="object-cover h-[650px] sm:h-[625px] w-full"
        ></video>
      </div>
      <div className="bg-[rgba(31,10,62,0.7)] w-full h-[650px] sm:h-[625px] absolute top-0 -z-10"></div>
      <div className="container">
        <div className="text-white pt-14 text-center ">
          <h1 className="text-2xl font-vazirMedium leading-8">
            آموزش آنلاین ویدیویی، مهارت برای اشتغال | میم لرن
          </h1>
          <h2 className="mt-4">آموزش‌های کاربردی از حرفه‌ای‌ها</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center relative mt-8 w-full">
              <Input
                id="search-input"
                className="placeholder:text-sm text-[#343a40] py-5 px-6 focus:outline-none rounded-xl w-full "
                type="text"
                placeholder="چی میخوای یاد بگیری ؟"
                ref={searchInputRef}
                onInput={debounceSearchUserQuery}
              />
              <span
                className="bg-primary rounded-lg w-16 h-14 flex items-center justify-center absolute left-2 cursor-pointer"
                onClick={debounceSearchUserQuery}
              >
                <BiSearch className="w-8 h-8" />
              </span>
            </div>
            <div
              id="searchResult"
              className={`bg-white absolute left-0 right-0 max-w-3xl w-full rounded-xl py-6 flex text-black shadow-[0_5px_10px_0_rgba(0,0,0,0.12)] min-h-[100px] max-h-72 sm:max-h-64 lg:max-h-80  overflow-y-auto ${
                searchInputCharacter.length > 0 ? "block" : "hidden"
              }`}
            >
              <div
                className={` bg-white w-full rounded-xl ${
                  responseQuery === false ? "block" : "hidden"
                }`}
              >
                <LoadingBar />
              </div>

              {responseQuery && searchFilteredCourse.length > 0 && (
                <ul className="flex flex-col justify-start  w-full">
                  {searchFilteredCourse?.map((courseItem) => (
                    <Link to={`/courseDetails/${courseItem.title}`}>
                      <li className="flex items-start py-2 px-4 transition-all duration-200 hover:bg-[#fafafa] w-full">
                        <span className="">
                          <img
                            src={courseItem.img}
                            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg object-cover"
                            alt="عکس دوره"
                          />
                        </span>
                        <span className="block mr-2 text-right transition-all duration-200 hover:text-primary cursor-pointer mt-1">
                          <Link
                            to={`/courseDetails/${courseItem.title}`}
                            className="text-[15px]"
                          >
                            {courseItem.title}
                          </Link>
                          <small className="block mt-3">
                            {courseItem.price} تومان
                          </small>
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
              <span
                className={`${
                  responseQuery && searchFilteredCourse.length < 1
                    ? "block"
                    : "hidden"
                } w-full text-center`}
              >
                نتیجه ای یافت نشد
              </span>
            </div>
            <HeaderInformation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
