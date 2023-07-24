import { LiaCommentDotsSolid } from "react-icons/lia";
import Input from "../Input/Input";
import Button from "../Button/Button";

const CourseComments = (): JSX.Element => {
  return (
    <section className="mt-10 bg-white border border-fourth ">
      <div className="relative flex items-center text-[#464749] border-b border-fourth p-4 after:block after:absolute after:w-20 after:h-[2px] after:bg-primary after:bottom-0">
        <LiaCommentDotsSolid className="w-8 h-8" />
        <span className="text-base pr-2"> نظرات </span>
      </div>
      <div className="mt-8 p-4 mb-4">
        <form
          className="bg-[#f8f9fa] border border-fourth rounded-lg p-4 text-[#6c757d]"
          action=""
        >
          <span className="block mt-8 text-sm text-[#464749]">
            نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
            شده‌اند *
          </span>
          <div className="mt-8">
            <label className="text-sm" htmlFor="courseComment">
              دیدگاه شما *
            </label>
            <textarea
              id="courseComment"
              className="focus:outline-none border border-fourth p-2 w-full mt-1"
              rows={5}
            ></textarea>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="w-[49%]">
              <label className="block text-sm" htmlFor="userName">
                نام *
              </label>
              <Input
                type="text"
                id="userName"
                className="transition-all text-sm mt-2 border border-fourth focus:outline-none w-full p-2 focus:shadow-[0_0_10px_0_rgba(0,0,0,.07)]"
              />
            </div>
            <div className="w-[49%]">
              <label className="block text-sm" htmlFor="userEmail">
                ایمیل *
              </label>
              <Input
                type="email"
                id="userEmail"
                className="transition-all text-sm mt-2 border border-fourth focus:outline-none w-full p-2 focus:shadow-[0_0_10px_0_rgba(0,0,0,.07)]"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <Input type="checkbox" id="usersCheck" className="ml-3" />
            <label htmlFor="usersCheck" className="text-sm">
              ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
              دیدگاهی می‌نویسم.
            </label>
          </div>
          <Button
            type="submit"
            className="mt-6 bg-primary text-white py-3 px-6 rounded-lg block mx-auto"
          >
            ارسال
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CourseComments;
