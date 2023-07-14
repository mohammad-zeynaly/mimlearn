import { Link } from "react-router-dom";
import { CoursesType } from "../../types/coursesInterface";

const CartProductItem = ({ title, img, price, count }: CoursesType) => {
  return (
    <li className="flex items-center justify-center h-24 border-b ">
      <span className="bg-[rgba(0,0,0,.08)] text-[#9ca4ac] font-vazirBold h-full w-5 flex items-center justify-center hover:bg-red-500 hover:text-white">
        x
      </span>
      <div className="flex items-center p-4 pr-2">
        <img className="w-16 object-cover ml-2" src={img} alt="عکس محصول" />
        <h6 className="mr-1">
          <Link to="product-details/1" className="text-[#464749]">
            {title}
          </Link>
          <span className="block text-secondary mt-2 text-[13px]">
            {count} × {price} تومان
          </span>
        </h6>
      </div>
    </li>
  );
};

export default CartProductItem;
