import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import ArticlesItem from "./ArticlesItem";
import useFilteredData from "../../hooks/useFilteredData";
import { ArticlesItemType } from "../../types/coursesInterface";

const Articles = (): JSX.Element => {
  const articlesItems: ArticlesItemType[] = useFilteredData("articles");

  return (
    <SectionTemplate
      title="مجله میم لرن "
      caption="مقالات ما را برای رسیدن به موفقیت دنبال کنید"
      classNameParent="mt-20"
    >
      <SwiperTemplate>
        {articlesItems.map((article) => (
          <SwiperSlide>
            <ArticlesItem {...article} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default Articles;
