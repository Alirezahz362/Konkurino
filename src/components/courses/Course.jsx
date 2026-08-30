import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import Card from "./Card";
import Grid from "./Grid";

// استایل‌های Swiper را وارد کنید
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Course = () => {
  const cardData = [
    {
      title: "دوره شیمی",
      image: "/img/shimi.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره ریاضی",
      image: "/img/riazi.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره فیزیک",
      image: "/img/fizik.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره زیست",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره انگلیسی",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره فارسی",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره عربی",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره دین وزندگی",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره زمین",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره فلسفه",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره حسابان",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
    {
      title: "دوره منطق",
      image: "/img/zist.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo minus adipisci possimus itaque nam quaerat praesentium vel perferendis qui.",
    },
  ];

  return (
    <>
      <Grid>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          slidesPerView={"2.5"}
          modules={[EffectCoverflow, Navigation, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3.5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...card}></Card>
            </SwiperSlide>
          ))}

          <div className="slide-Control position-relative w-50 mx-auto my-2">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </Grid>
    </>
  );
};

export default Course;
