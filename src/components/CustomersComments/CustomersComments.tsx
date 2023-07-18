import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import CustomersCommentsItem from "./CustomersCommentsItem";
import useFilteredData from "../../hooks/useFilteredData";
import { CommentsType } from "../../types/coursesInterface";

const CustomersComments = (): JSX.Element => {
  const customersCommentItems: CommentsType[] = useFilteredData("comments");

  return (
    <SectionTemplate
      title="نظرات برخی از مشتریان"
      caption="اراده آهنین های آکادمی میم لرن"
      classNameParent="mt-20"
    >
      <SwiperTemplate
        between={16}
        breakPoint={{
          800: {
            slidesPerView: 2,
          },
        }}
      >
        {customersCommentItems.map((commentData) => (
          <SwiperSlide>
            <CustomersCommentsItem {...commentData} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default CustomersComments;
