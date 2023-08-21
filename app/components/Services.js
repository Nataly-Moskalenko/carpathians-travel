'use client';

import { React, useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import ServiceCard from './ServiceCard';
import Photo01 from '../../public/service1.jpg';
import Photo02 from '../../public/service2.jpg';
import Photo03 from '../../public/service3.jpg';
import Photo04 from '../../public/service4.jpg';
import Photo05 from '../../public/service5.jpg';

const cards = [
  {
    number: '01',
    title: 'ATVs Traveling',
    text: 'Feel the adrenaline rush',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    image: Photo01,
  },
  {
    number: '02',
    title: 'Rock climbing',
    text: 'Destroy your limitations',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    image: Photo02,
  },
  {
    number: '03',
    title: 'Hot air ballooning',
    text: 'Get inspired',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    image: Photo03,
  },
  {
    number: '04',
    title: 'Skydiving',
    text: 'Overcome your fears',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    image: Photo04,
  },
  {
    number: '05',
    title: 'Rafting',
    text: 'Trust the flow',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    image: Photo05,
  },
];

export default function Services() {
  return (
    <section
      id="Services"
      className="text-white h-[851px] md:h-[621px] lg:h-[779px] bg-light-gray w-full bg-image-services bg-center bg-no-repeat bg-cover pl-5 pr-5 pt-[56px] pb-[56px] md:pl-8 md:pr-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="w-[320px] md:w-full mx-auto">
        {/* <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          // pagination
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          // onInit={() => setInit(true)}
          autoplay={true}
          loop={true}
          scrollbar={{ draggable: true }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.number}>
              {/* {({ isActive }) => <div>Current slide is {isActive ? 'active' : 'not active'}</div>} */}
              <ServiceCard card={card} />
            </SwiperSlide>
          ))}
          {/* <button
            ref={prevRef}
            className="text-[33px] font-thin uppercase ml-auto leading-[1.2]"
          >
            <p className="">Back</p>
          </button>
          <button
            className="absolute right-0 bottom-0 text-[33px] font-thin uppercase mr-auto leading-[1.2]"
            ref={nextRef}
          >
            <p className="">Next</p>
          </button> */}
        </Swiper>
      </div>
    </section>
  );
}
