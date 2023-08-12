import { Link } from "react-router-dom";
import { CoursesType } from "../../types/coursesInterface";
import { useAppDispatch } from "../../Redux/store/store";
import {
  removeFromCart,
  totalPrice,
} from "../../Redux/reducers/coursesStateSlice";
import useNumberPersian from "../../hooks/useNumberPersian";
import tostBox from "../../functions/tostBox";

const CartProductItem = ({ id, title, img, price, count }: CoursesType) => {
  const dispatch = useAppDispatch();
  const removeCartProduct = () => {
    dispatch(removeFromCart(id));
    dispatch(totalPrice());
    tostBox("error");
  };

  return (
    <li className="flex items-center h-24 border-b w-full">
      <span
        className="bg-[rgba(0,0,0,.08)] text-[#9ca4ac] font-vazirBold h-full w-5 flex items-center justify-center transition-all hover:bg-red-500 hover:text-white"
        onClick={removeCartProduct}
      >
        x
      </span>
      <div className="flex items-center p-4 pr-2">
        <img
          className="w-16 object-cover ml-2"
          src={`.${img}`}
          alt="عکس محصول"
        />
        <h6 className="mr-1">
          <Link
            to={`/courseDetails/${title?.trim()}`}
            className="text-[#464749] transition-all hover:text-primary"
          >
            {title}
          </Link>
          <span className="block text-secondary mt-2 text-[13px]">
            {count} × {useNumberPersian(price)} تومان
          </span>
        </h6>
      </div>
    </li>
  );
};

export default CartProductItem;
