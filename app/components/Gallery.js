'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Gallery() {
  return (
    <section id="Gallery">
      <h2>Our gallery</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </section>
  );
}
