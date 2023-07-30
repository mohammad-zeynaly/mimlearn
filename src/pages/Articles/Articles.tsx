import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Articles = (): JSX.Element => {
  return (
    <>
      <Breadcrumb title="مقالات" currentPage="مقالات" />
      <section className="mt-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-5">
            <div className="rounded-2xl shadow-[0_5px_30px_rgb(70,72,77,0.08)] overflow-hidden">
              <Link to="/articles/article1">
                <div className="relative after:block after:absolute after:top-0 after:w-full after:h-full after:bg-articleGradient">
                  <img
                    src="../assets/images/articles/article-1.jpg"
                    className="object-cover w-full h-auto "
                    alt="عکس مقاله"
                  />
                </div>
              </Link>
              <div className="bg-white p-4">
                <Link
                  to="/articles/article1"
                  className="text-[#464749] block mt-2 transition-all hover:text-primary"
                >
                  ۹ ویژگی پنهان در کتابخانه چند رسانه ای وردپرس
                </Link>
                <p className="text-[#898989] mt-8 leading-6 text-xs mb-2">
                  امروز بیایید با ۹ ویژگی کتابخانه چندرسانه ای در وردپرس آشنا
                  شوید تا بتوانید رسانه‌های را بهتر...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
