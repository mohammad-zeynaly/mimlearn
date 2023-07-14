import { FaMicrophoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import RadioSliderItem from "./RadioSliderItem";
import useFilteredData from "../../hooks/useFilteredData";
import { radioItemsType } from "../../types/coursesInterface";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const RadioSite = () => {
  const radioSliderItemsData: radioItemsType[] = useFilteredData("radio");

  return (
    <section className="mt-16">
      <div className="container">
        <h2 className="text-2xl font-vazirMedium text-center">رادیو میم لرن</h2>
        <h3 className="mt-4 max-w-sm mx-auto flex items-center after:border-dashed after:block after:border-t after:border-third after:flex-grow before:border-dashed before:block before:border-t before:border-third before:flex-grow">
          <FaMicrophoneAlt className="text-third w-7 h-7 mx-3" />
        </h3>

        <div className="w-full max-w-[900px] h-[300px] mx-auto">
          <Swiper
            effect="fade"
            slidesPerView={1}
            loop={true}
            loopedSlides={1}
            modules={[Pagination, EffectFade]}
            pagination={{ clickable: true }}
          >
            {radioSliderItemsData.map((radioItem) => (
              <SwiperSlide>
                <RadioSliderItem {...radioItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RadioSite;
