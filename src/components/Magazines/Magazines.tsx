import { useEffect } from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import MagazineBox from "./MagazineBox";
import { useAppSelector, useAppDispatch } from "../../Redux/store/store";
import { fetchGetTheArticles } from "../../Redux/reducers/coursesStateSlice";

const Magazines = (): JSX.Element => {
  const magazineItems = useAppSelector((state) => state.courses.allArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTheArticles());
  }, []);

  return (
    <SectionTemplate
      title="مجله میم لرن "
      caption="مقالات ما را برای رسیدن به موفقیت دنبال کنید"
      classNameParent="mt-20"
    >
      <SwiperTemplate
        between={24}
        breakPoint={{
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
        {magazineItems.map((magazine) => (
          <SwiperSlide key={magazine.id}>
            <MagazineBox {...magazine} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default Magazines;
