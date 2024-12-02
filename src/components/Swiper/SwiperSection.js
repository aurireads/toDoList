import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const SwiperSection = ({ images }) => {
  return (
    <div className="swiper-container">
      <div className="swiper-background">
        <h1 className="heading">good things</h1>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{ width: '500px', height: '600px', zIndex: '1000' }}

      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ justifyContent: 'center', display: 'flex', margin: 'auto' }}>

            <div className="swiper-info">
              <img
                src={image}
                alt={`slide_image_${index + 1}`}
                loading="lazy"
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x400")}
                className="img-content"
              />
              <img src="/images/BG.png" alt="" className="swiper-decoration" />
              <div className="subtitle-content">
                function
              </div>
              <p className="description-content">Organize your daily job enhance your life performance</p>
              <a href="" className="more-content">read more</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;