import { BiSearch } from "react-icons/bi";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Header = (): JSX.Element => {
  return (
    <header id="header" className="mt-5">
      <div className="w-full h-[600px] sm:h-[550px] bg-[url('./assets/images/header-bg.jpg')] -z-10 bg-cover absolute top-0 "></div>
      <div className="bg-video w-full h-full absolute top-0 -z-10">
        <video
          loop
          autoPlay
          muted
          src="./assets/videos/header-bg-video.mp4"
          className="object-cover h-[600px] sm:h-[550px] w-full"
        ></video>
      </div>
      <div className="bg-[rgba(31,10,62,0.7)] w-full h-[600px] sm:h-[550px] absolute top-0 -z-10"></div>
      <div className="container">
        <div className="text-white pt-14 text-center ">
          <h1 className="text-2xl font-vazirMedium leading-8">
            آموزش آنلاین ویدیویی، مهارت برای اشتغال | میم لرن
          </h1>
          <h2 className="mt-4">آموزش‌های کاربردی از حرفه‌ای‌ها</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center relative mt-8 w-full">
              <Input
                id="search-input"
                className="placeholder:text-sm text-[#343a40] py-5 px-6 focus:outline-none rounded-xl w-full "
                type="text"
                placeholder="چی میخوای یاد بگیری ؟"
              />
              <Button className="bg-primary rounded-lg w-16 h-14 flex items-center justify-center absolute left-2">
                <BiSearch className="w-8 h-8" />
              </Button>
            </div>
            <div className="flex sm:flex-row-reverse flex-wrap justify-between items-center w-full mt-8">
              <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
                <img
                  className="w-12 sm:w-auto object-cover"
                  src="./assets/images/minutes.png"
                  alt="تصویر مشخصات"
                />
                <h4 className="text-lg sm:text-xl mt-3">۶۶۶,۵۰۰</h4>
                <h5 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
                  نفر ثبت‌نام در دوره
                </h5>
              </div>
              <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
                <img
                  className="w-12 sm:w-auto object-cover"
                  src="./assets/images/courses.png"
                />
                <h4 className="text-lg sm:text-xl mt-3">۳,۷۸۵</h4>
                <h5 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
                  عدد دروه آموزشی
                </h5>
              </div>
              <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
                <img
                  className="w-12 sm:w-auto object-cover"
                  src="./assets/images/minutes.png"
                />
                <h4 className="text-lg sm:text-xl mt-3">۵۲۹,۸۸۴</h4>
                <h5 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
                  دقیقه آموزش کاربردی
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
