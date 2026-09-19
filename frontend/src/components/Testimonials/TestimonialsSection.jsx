
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import useTestimonials from "../../hooks/useTestimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const { testimonials, loading, error } = useTestimonials();
  const defaultData = [
    {
      id: 1,
      name: "امیرحسین رضایی",
      rank: "۱۴۲",
      field: "کنکور تجربی",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      comment:
        "با دوره‌های فیزیک کنکورینو توانستم درصدم را از ۳۰ به ۸۵ برسانم. تحلیل آزمون‌ها فوق‌العاده بود.",
      rating: 5,
      course: "جامع فیزیک تجربی",
    },
    {
      id: 2,
      name: "زهرا کاظمی",
      rank: "۸۹",
      field: "کنکور انسانی",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      comment:
        "برنامه‌ریزی مشاوران کنکورینو نظم عجیبی به مطالعه‌ام داد. مدیریت زمانم را مدیون این پلتفرم هستم.",
      rating: 5,
      course: "مشاوره تخصصی کنکور",
    },
    {
      id: 3,
      name: "علی اصغری",
      rank: "۲۱۵",
      field: "کنکور ریاضی",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
      comment:
        "تست‌های احتمالی حسابان کاملاً شبیه کنکور سراسری بود. از اساتید کنکورینو بسیار سپاسگزارم.",
      rating: 5,
      course: "حسابان و ریاضیات جامع",
    },
  ];
  const list = testimonials.length > 0 ? testimonials : defaultData;
  if (error) return null;

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span>داستان‌های موفقیت</span>
          <h2>نظرات دانش‌آموزان و رتبه‌های برتر</h2>
          <p>تجربه دانش‌آموزانی که با کنکورینو به رتبه‌های برتر رسیدند</p>
        </div>
        {loading ? (
          <div>در حال بارگذاری نظرات...</div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {list.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}{" "}
      </div>{" "}
    </section>
  );
};
export default TestimonialsSection;
