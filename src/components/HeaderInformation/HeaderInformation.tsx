const HeaderInformation = () => {
  return (
    <div className="flex sm:flex-row-reverse flex-wrap justify-between items-center w-full mt-8 mb-8">
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
  );
};

export default HeaderInformation;
