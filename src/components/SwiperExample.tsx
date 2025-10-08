import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/SwiperExample.scss';

const SwiperExample: React.FC = () => {
  const slides = [
    { id: 1, title: 'Слайд 1', content: 'Содержимое первого слайда' },
    { id: 2, title: 'Слайд 2', content: 'Содержимое второго слайда' },
    { id: 3, title: 'Слайд 3', content: 'Содержимое третьего слайда' },
    { id: 4, title: 'Слайд 4', content: 'Содержимое четвертого слайда' },
  ];

  return (
    <div className="swiper-example">
      <h3>Пример использования Swiper</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper-example__swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-example__slide">
            <div className="swiper-example__content">
              <h4>{slide.title}</h4>
              <p>{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperExample;
