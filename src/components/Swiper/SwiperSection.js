import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./styles.css";

const SwiperSection = ({ images }) => {
  return (
    <div className="swiper-container">
      <h1 className="heading">Good Things</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1} // Apenas 1 slide visível por vez
        spaceBetween={0} // Remove espaçamento entre os slides
        breakpoints={{
          768: {
            slidesPerView: 1, // Configuração para telas maiores (pode ajustar para 2 ou 3 conforme necessário)
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
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;
