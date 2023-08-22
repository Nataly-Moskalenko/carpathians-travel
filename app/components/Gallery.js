'use client';

import { React, useRef, useState } from 'react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

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
      className="text-white h-[801px] md:h-[575px] lg:h-[788px] bg-light-gray w-full bg-image-gallery bg-center bg-no-repeat bg-cover px-5 pt-[56px] pb-[56px] md:px-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <h2 className="mb-6 md:mb-[72px] text-center lg:text-left lg:m-6">
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          Our{' '}
        </span>
        <span className="text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] leading-[56px] md:leading-[1.2]">
          gallery
        </span>
      </h2>
      <ul className='flex flex-col gap-6 md:hidden'>
        <li>
        <Image
                className="w-[280px] h-[187px] mx-auto"
                src={Gallery1}
                alt="Photo CarpTravel"
              />
        </li>
        <li>
        <Image
                className="w-[280px] h-[187px] mx-auto"
                src={Gallery2}
                alt="Photo CarpTravel"
              />
        </li>
        <li>
        <Image
                className="w-[280px] h-[187px] mx-auto"
                src={Gallery3}
                alt="Photo CarpTravel"
              />
        </li>
      </ul>
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={() => setInit(true)}
          autoplay={true}
          loop={true}          
        >
          {galeryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                className="md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px] mx-auto"
                src={image.src}
                alt="Photo CarpTravel"
              />
            </SwiperSlide>
          ))}
          <button
            ref={prevRef}
            className="text-[33px] font-thin uppercase leading-[1.2]"
          >
            <p className="">Back</p>
          </button>
          <button
            className="absolute right-0 bottom-0 text-[33px] font-thin uppercase leading-[1.2]"
            ref={nextRef}
          >
            <p className="">Next</p>
          </button>
        </Swiper>
      </div>
    </section>
  );
}
