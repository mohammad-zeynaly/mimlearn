import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import MagazineBox from "./MagazineBox";
import useFilteredData from "../../hooks/useFilteredData";
import { MagazineBoxType } from "../../types/coursesInterface";

const Magazines = (): JSX.Element => {
  const articlesItems: MagazineBoxType[] = useFilteredData("articles");

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
        {articlesItems.map((article) => (
          <SwiperSlide key={article.id}>
            <MagazineBox {...article} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default Magazines;
