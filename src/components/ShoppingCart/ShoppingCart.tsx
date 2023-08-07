import { Link } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../../Redux/store/store";
import CartProductItem from "./CartProductItem";
import { removeFromCart } from "../../Redux/reducers/coursesStateSlice";

const ShoppingCart = (): JSX.Element => {
  const shoppingCartProduct = useAppSelector(
    (state) => state.courses.basketProduct
  );

  const isInShowShoppingCart = useAppSelector(
    (state) => state.globalStates.isShowShoppingCart
  );
  return (
    <>
      {isInShowShoppingCart && (
        <aside
          id="shopping-cart"
          className="bg-white w-72 sm:w-80 fixed top-0 bottom-0 right-0 flex items-start justify-center h-[110%] z-40 text-sm"
        >
          {/* empty shoppingCart */}
          {shoppingCartProduct.length < 1 ? (
            <div className="flex items-center mt-16 ">
              <img
                className="w-10 object-cover"
                src="../assets/images/emptyBasket.png"
                alt="سبد خالی"
              />
              <span className="text-[#7c7d7e] ">
                هنوز هیچ دوره ای اضافه نکرده اید.
              </span>
            </div>
          ) : (
            <ul className="flex flex-col w-full relative">
              {shoppingCartProduct.map((product) => (
                <CartProductItem key={product.id} {...product} />
              ))}
              <div className="w-72 sm:w-80 fixed right-0 bottom-0">
                <div className="pt-12">
                  <p className="flex justify-between items-center border-t pt-4 p-4">
                    <strong className="text-base text-[#9ca4ac] ">جمع:</strong>
                    <span className="text-secondary">2,179,000 تومان</span>
                  </p>
                </div>
                <div className="p-4">
                  <Link
                    className="block bg-secondary p-3 text-base text-white rounded-lg text-center"
                    to="/shopping-cart"
                  >
                    مشاهده سبد خرید
                  </Link>
                  <Link
                    className="block mt-4 bg-primary p-3 text-base text-white rounded-lg text-center"
                    to="/shopping-cart"
                  >
                    تسویه حساب
                  </Link>
                </div>
              </div>
            </ul>
          )}
        </aside>
      )}
    </>
  );
};

export default ShoppingCart;
