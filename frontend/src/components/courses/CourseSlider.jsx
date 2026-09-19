import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import CourseCard from "./CourseCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CourseSlider = ({ courses }) => {
  return (
    <div className="course-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        speed={900}
        grabCursor={true}
        autoplay={{
          delay: 3500,

          pauseOnMouseEnter: true,

          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
          },

          640: {
            slidesPerView: 1.5,
          },

          900: {
            slidesPerView: 2.2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 0,

          stretch: 0,

          depth: 120,

          modifier: 1.5,

          slideShadows: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
