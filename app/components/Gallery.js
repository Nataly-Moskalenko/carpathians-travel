'use client';

import { React, useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import Gallery1 from '../../public/gallery1.jpg';
import Gallery2 from '../../public/gallery2.jpg';
import Gallery3 from '../../public/gallery3.jpg';

const galeryImages = [
  { id: 1, src: Gallery1 },
  { id: 2, src: Gallery2 },
  { id: 3, src: Gallery3 },
];

export default function Gallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();
  return (
    <section
      id="Gallery"
      className="text-white h-[788px] bg-light-gray w-full bg-image-about bg-center bg-no-repeat bg-cover p-20"
    >
      <h2>
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          Our{' '}
        </span>
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          gallery
        </span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        autoplay={true}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {galeryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              className="w-[606px] h-[429px] ml-auto mr-auto"
              src={image.src}
              alt="Photo CarpTravel"
            />
          </SwiperSlide>
        ))}
        <button
          ref={prevRef}
          className="text-[33px] font-thin uppercase ml-auto leading-[1.2] w-[294px]"
        >
          <p className="">Back</p>
        </button>
        <button
          className="absolute right-0 bottom-0 text-[33px] font-thin uppercase mr-auto leading-[1.2] w-[294px]"
          ref={nextRef}
        >
          <p className="">Next</p>
        </button>
      </Swiper>
    </section>
  );
}
