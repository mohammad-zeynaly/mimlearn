import { useState } from "react";
import { Link } from "react-router-dom";
import { CoursesType } from "../../types/coursesInterface";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";
import {
  removeFromCart,
  totalPrice,
  selectedProductCountUpdate,
} from "../../Redux/reducers/coursesStateSlice";
import useNumberPersian from "../../hooks/useNumberPersian";
import tostBox from "../../functions/tostBox";

const CartProductItem = ({
  id,
  title,
  img,
  price,
  count,
}: CoursesType): JSX.Element => {
  const [productCount, setProductCount] = useState<number>(1);
  const dispatch = useAppDispatch();
  const removeCartProduct = () => {
    dispatch(removeFromCart(id));
    dispatch(totalPrice());
    tostBox("error");
  };

  const getTotalPriceValue = useAppSelector(
    (state) => state.courses.totalPriceValue
  );

  const updateProductCount = (productCountInput: number, productId: number) => {
    dispatch(
      selectedProductCountUpdate({ id: productId, count: productCountInput })
    );
    dispatch(totalPrice());
  };

  return (
    <tr className="mt-5 border-b-2 border-fourth sm:border-none">
      <td className="block sm:flex sm:items-center pt-4 pb-4">
        <span
          className="text-red-500 font-vazirBold text-lg pl-4 sm:pl-0 cursor-pointer"
          onClick={removeCartProduct}
        >
          x
        </span>
        <Link to={`/courseDetails/${title}`}>
          <img
            className="w-20 object-cover mr-8 hidden sm:block"
            src={img}
            alt="عکس محصول "
          />
        </Link>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">محصول</span>
        <div>
          <Link
            to={`/courseDetails/${title}`}
            className="transition-all hover:text-primary"
          >
            {title}
          </Link>
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">قیمت :</span>
        <div className="">
          <h6 className="text-xs inline">{useNumberPersian(price)} </h6>
          <span className="pr-1">تومان</span>
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">تعداد :</span>
        <div className="">
          <input
            id="productCount"
            type="number"
            className="shadow-[0px_6px_6px_2px_rgba(0,0,0,.06)] focus:outline-none w-14 h-12 rounded-lg p-2"
            onChange={(event) => {
              const productCountInput = +(event.target as HTMLInputElement)
                .value;
              setProductCount(productCountInput);
              updateProductCount(productCountInput, id);
            }}
            value={count}
            min={0}
            max={10}
          />
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">جمع:</span>
        <div className="">
          <h6 className="text-xs inline">
            {useNumberPersian(getTotalPriceValue)}
          </h6>
          <span className="pr-1">تومان</span>
        </div>
      </td>
    </tr>
  );
};

export default CartProductItem;
