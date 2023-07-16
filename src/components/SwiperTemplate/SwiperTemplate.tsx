import { Swiper } from "swiper/react";
import { Scrollbar, Pagination, Autoplay } from "swiper/modules";
import { useState, ReactNode, CSSProperties } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface swiperTemplateProps {
  children?: ReactNode;
}

const SwiperTemplate = ({ children }: swiperTemplateProps): JSX.Element => {
  const [mySwiper, setMySwiper] = useState<typeof Swiper | object | any>(null);
  const [swiperDesktopPaginationStatus, setSwiperDesktopPaginationStatus] =
    useState<boolean>(false);

  const decreasePagination = () => {
    if (mySwiper) {
      mySwiper.slidePrev();
      setSwiperDesktopPaginationStatus(false);
    }
    console.log(mySwiper);
  };

  const increasePagination = () => {
    if (mySwiper) {
      mySwiper.slideNext();
      setSwiperDesktopPaginationStatus(true);
    }
  };

  return (
    <Swiper
      style={
        {
          "--swiper-navigation-size": "25px",
        } as CSSProperties
      }
      className="overflow-hidden"
      onSwiper={(swiper) => setMySwiper(swiper)}
      modules={[Scrollbar, Autoplay, Pagination]}
      spaceBetween={25}
      slidesPerGroup={1}
      scrollbar={{ draggable: true }}
      freeMode={true}
      loopedSlides={1}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} sm:hidden"></span>`;
        },
      }}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1250: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      }}
    >
      {/* swiper slide */}
      {children}

      {/* custom navigation */}
      <div
        onClick={increasePagination}
        className="swiper-button-next !left-0"
      ></div>
      <div
        onClick={decreasePagination}
        className="swiper-button-prev !right-0"
      ></div>

      {/* custom pagination  */}
      <div className="mt-2 text-center hidden sm:block ">
        <span
          className={`swiper-pagination-bullet ${
            !swiperDesktopPaginationStatus && "swiper-pagination-bullet-active"
          }`}
          onClick={decreasePagination}
        ></span>
        <span
          className={`swiper-pagination-bullet !mr-4 ${
            swiperDesktopPaginationStatus && "swiper-pagination-bullet-active"
          }`}
          onClick={increasePagination}
        ></span>
      </div>
    </Swiper>
  );
};

export default SwiperTemplate;
