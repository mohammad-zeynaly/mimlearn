const HeaderInformation = () => {
  return (
    <div className="flex sm:flex-row-reverse flex-wrap justify-between items-center w-full mt-8 mb-8">
      <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
        <img
          className="w-12 sm:w-auto object-cover"
          src="./assets/images/minutes.webp"
          alt=" شمارنده دقیقه"
        />
        <h3 className="text-lg sm:text-xl mt-3">۶۶۶,۵۰۰</h3>
        <h4 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
          نفر ثبت‌نام در دوره
        </h4>
      </div>
      <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
        <img
          className="w-12 sm:w-auto object-cover"
          src="./assets/images/courses.webp"
          alt="شمارنده دوره"
        />
        <h3 className="text-lg sm:text-xl mt-3">۳,۷۸۵</h3>
        <h4 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
          عدد دروه آموزشی
        </h4>
      </div>
      <div className="flex flex-col items-center w-[49%] sm:w-1/3 mb-6 sm:mb-0">
        <img
          className="w-12 sm:w-auto object-cover"
          src="./assets/images/minutes.webp"
          alt="شمارنده دقیقه"
        />
        <h3 className="text-lg sm:text-xl mt-3">۵۲۹,۸۸۴</h3>
        <h4 className="mt-[6px] text-sm sm:mt-2 sm:text-[15px]">
          دقیقه آموزش کاربردی
        </h4>
      </div>
    </div>
  );
};

export default HeaderInformation;
