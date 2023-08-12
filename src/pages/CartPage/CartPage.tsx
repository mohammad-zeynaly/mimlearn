import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartProductItem from "../../components/CartProductItem/CartProductItem";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../Redux/store/store";
import useNumberPersian from "../../hooks/useNumberPersian";

const CartPage = (): JSX.Element => {
  const [isEmptyCart, setIsEmptyCart] = useState<boolean>(false);
  const allCourses = useAppSelector((state) => state.courses.basketProduct);
  const totalPriceValue = useAppSelector(
    (state) => state.courses.totalPriceValue
  );

  console.log("allCourses", allCourses);
  return (
    <section className="">
      <div className="container text-sm sm:mb-12">
        {isEmptyCart ? (
          <>
            <span className="block pt-32 sm:pt-24">
              <FaBoxOpen className="w-32 h-32 sm:w-36 sm:h-36 text-[#e2e5e8] mx-auto" />
            </span>
            <p className="my-2 mb-4 text-center sm:text-right">
              سبد خرید شما در حال حاضر خالی است.
            </p>
            <div className="flex justify-center">
              <Link to="/" className=" bg-primary text-white p-3 rounded-lg ">
                بازگشت به فروشگاه
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row justify-between items-start pt-32 sm:pt-12 gap-5 text-[#7f7e83]">
              <div className="w-full lg:w-3/4 border border-fourth bg-white p-5 rounded-md">
                <table className="w-full border-b border-fourth">
                  <thead className="hidden sm:table-header-group border-b border-fourth">
                    <tr>
                      <th></th>
                      <th className="font-light pb-3">محصول </th>
                      <th className="font-light pb-3">قیمت </th>
                      <th className="font-light pb-3">تعداد</th>
                      <th className="font-light pb-3">جمع</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCourses?.map((cartCourse) => (
                      <CartProductItem {...cartCourse} />
                    ))}
                  </tbody>
                </table>
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center ">
                  <div className="relative w-full sm:flex-grow sm:w-auto">
                    <Input
                      id="discountCode"
                      type="text"
                      className="focus:outline-none focus:shadow-[0_0_10px_0_rgba(0,0,0,0.07)] border border-fourth py-3 px-4 sm:max-w-xs w-full"
                      placeholder="کد تخفیف"
                    />
                    <Button
                      type="button"
                      className="bg-primary text-white py-[13px] px-4 rounded-tl-md rounded-bl-md absolute left-0 sm:left-auto"
                    >
                      اجرا کوپن
                    </Button>
                  </div>
                  <Button
                    type="button"
                    className=" text-white bg-primary p-3 rounded-lg mt-5 sm:mt-0"
                  >
                    بروز رسانی سبدخرید
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/4 bg-white border border-fourth p-5 rounded-md mt-3 sm:mt-0">
                <h3 className="text-lg text-[#464749]">جمع کل سبد خرید</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-fourth mt-5">
                      <th className="font-light pb-4 pt-5">جمع جزء</th>
                      <td className="pb-4 pt-5 flex items-center">
                        <h6 className="text-xs">
                          {useNumberPersian(totalPriceValue)}
                        </h6>
                        <span className="pr-1">تومان</span>
                      </td>
                    </tr>
                    <tr className="border-b border-fourth mt-5">
                      <th className="font-light pb-4 pt-5"> مجموع</th>
                      <td className="pb-4 pt-5 flex items-center">
                        <h6 className="text-xs">
                          {useNumberPersian(totalPriceValue)}
                        </h6>
                        <span className="pr-1">تومان</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/shopping-cart"
                  className="block mt-8 mb-2 text-center bg-primary text-white rounded-lg p-4"
                >
                  ادامه جهت تسویه حساب
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
