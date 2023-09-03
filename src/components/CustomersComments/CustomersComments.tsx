import { useEffect } from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import CustomersCommentsItem from "./CustomersCommentsItem";
import { fetchGetTheComments } from "../../Redux/reducers/coursesStateSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";

const CustomersComments = (): JSX.Element => {
  const customersCommentItems = useAppSelector(
    (state) => state.courses.allComments
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTheComments());
  }, []);

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
          <SwiperSlide key={commentData.id}>
            <CustomersCommentsItem {...commentData} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default CustomersComments;
