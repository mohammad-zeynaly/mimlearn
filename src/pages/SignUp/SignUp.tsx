import Input from "../../components/Input/Input";
import { MdOutlineEmail } from "react-icons/md";
import { FaLockOpen, FaUserLock } from "react-icons/fa";
import { LiaUserLockSolid } from "react-icons/lia";
import { useAppDispatch } from "../../Redux/store/store";
import { isShowLoginFormHandler } from "../../Redux/reducers/globalStates";

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <section className="pt-24 bg-[#f8f9fa] mb-4">
      <div className="container">
        <div className=" sm:p-4 flex flex-col items-center max-w-3xl mx-auto w-full rounded-lg sm:bg-white ">
          <div className="flex justify-center items-center rounded-full absolute mt-28 top-0 bg-white shadow-[0_6px_20px_rgba(168,172,185,0.3)] w-40 h-40">
            <span className="flex justify-center items-center bg-primary z-20 absolute w-32 h-32 rounded-full">
              <FaUserLock className="w-[70%] h-[70%] text-white " />
            </span>
          </div>
          <div className="form-container w-full bg-white z-10 pt-16 sm:pt-16 mt-28 sm:mt-0 p-4 rounded-lg sm:rounded-none sm:p-0">
            <h1 className="text-[#7b868a] text-lg font-vazirMedium">
              عضویت در سایت
            </h1>
            <span className="flex justify-center bg-[#f5f8fb] p-6 text-sm w-full mt-4">
              قبلا ثبت‌نام کرده‌اید؟
              <button
                className="text-primary mr-3 border-b border-dashed pb-1"
                onClick={() => dispatch(isShowLoginFormHandler())}
              >
                وارد شوید
              </button>
            </span>
            <form
              className="w-full"
              action="#"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="relative w-full mt-8">
                <Input
                  type="text"
                  placeholder=" آدرس ایمیل * "
                  id="emailAddress"
                  className="p-2 focus:outline-none border border-solid border-[#dcdcdc] rounded-[4px] text-sm w-full"
                />
                <MdOutlineEmail className="w-6 h-6 absolute top-[22%] left-4 text-[#ccc]" />
              </div>
              <div className="relative w-full mt-8">
                <Input
                  type="text"
                  placeholder=" رمز عبور * "
                  id="registerPassword"
                  className="p-2 focus:outline-none border border-solid border-[#dcdcdc] rounded-[4px] text-sm w-full"
                />
                <FaLockOpen className="w-6 h-6 absolute top-[22%] left-4 text-[#ccc]" />
              </div>
              <button
                type="submit"
                className="bg-primary text-white rounded-lg w-full py-3  mt-8 mb-4 flex justify-center items-center relative text-lg"
              >
                عضویت
                <LiaUserLockSolid className="w-7 h-7 absolute right-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
