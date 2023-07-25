import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { isShowLoginFormHandler } from "../../Redux/reducers/globalStates";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";

const LoginModal = () => {
  const dispatch = useAppDispatch();

  const loginModalStatus = useAppSelector(
    (state) => state.globalStates.isShowLoginForm
  );

  return createPortal(
    <>
      <div className="flex justify-center" id="login-page-modal">
        <div
          className={`transition-all duration-200 ${
            loginModalStatus ? "opacity-100 visible" : "opacity-0 invisible"
          } z-50 bg-white fixed  mt-12 overflow-hidden rounded-lg max-w-[400px] w-[96%]`}
        >
          <span className="p-4 bg-[#f6f6f6] flex justify-between items-center">
            <h6 className="text-lg">ورود </h6>
            <button
              onClick={() => dispatch(isShowLoginFormHandler())}
              className="text-[#464749] text-lg"
            >
              X
            </button>
          </span>
          <form action="" className="p-4 mb-4 text-[#6c757d]">
            <div className="flex flex-col ">
              <label htmlFor="userName" className="text-[15px] mb-2 ">
                نام کاربری:
              </label>
              <input
                id="userName"
                className="p-2 focus:outline-none border border-solid border-[#dcdcdc] rounded-[4px]"
                type="text"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="userName" className="text-[15px] mb-2 ">
                رمز عبور:
              </label>
              <Input id="userName" type="text" />
            </div>
            <div className="flex items-center justify-between text-sm mt-4">
              <h6 className="flex items-center justify-between">
                <Input type="checkbox" id="check" />
                <span className=" mr-1"> مرا به خاطر داشته باش</span>
              </h6>
              <span> فراموشی رمز عبور ؟</span>
            </div>
            <Button className="bg-primary text-white flex items-center justify-center p-3 w-24 rounded-lg mx-auto mt-4">
              ورود
            </Button>
            <p className="mt-5 text-sm">
              هنوز عضو نشده اید؟
              <Link className="mr-2" to="/create-account">
                عضویت در سایت
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("modals")! as HTMLDivElement
  );
};

export default LoginModal;
