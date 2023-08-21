'use client';

import { React } from 'react';
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
    subtitles: ['Rock climbing', 'Hot air ballooning', 'Skydiving', 'Rafting'],
    text: 'Feel the adrenaline rush',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    image: Photo01,
  },
  {
    number: '02',
    title: 'Rock climbing',
    subtitles: ['ATVs Traveling', 'Hot air ballooning', 'Skydiving', 'Rafting'],
    text: 'Destroy your limitations',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    image: Photo02,
  },
  {
    number: '03',
    title: 'Hot air ballooning',
    subtitles: ['ATVs Traveling', 'Rock climbing', 'Skydiving', 'Rafting'],
    text: 'Get inspired',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    image: Photo03,
  },
  {
    number: '04',
    title: 'Skydiving',
    subtitles: ['ATVs Traveling', 'Rock climbing', 'Hot air ballooning', 'Rafting'],
    text: 'Overcome your fears',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    image: Photo04,
  },
  {
    number: '05',
    title: 'Rafting',
    subtitles: ['ATVs Traveling', 'Rock climbing', 'Hot air ballooning', 'Skydiving'],
    text: 'Trust the flow',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    image: Photo05,
  },
];

const menu = ['ATVs Traveling', 'Rock climbing', 'Hot air ballooning', 'Skydiving', 'Rafting'];

export default function Services() {
  return (
    <section
      id="Services"
      className="text-white h-[851px] md:h-[621px] lg:h-[779px] bg-light-gray w-full bg-image-services bg-center bg-no-repeat bg-cover pl-5 pr-5 pt-[56px] pb-[56px] md:pl-8 md:pr-8 md:pt-[64px] md:pb-[64px] lg:p-20"
    >
      <div className="w-[320px] md:w-full mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          loop={true}          
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '">' + menu[index] + '</div>';
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.number}>
              <ServiceCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination absolute w-[188px] md:w-[204px] lg:w-[254px] flex flex-col gap-4 lg:gap-6 uppercase">
          {menu.map((i, el) => (
            <div
              key={i}
              className="text-[20px] md:text-[22px] lg:text-[28px] font-[500] uppercase leading-[17px] md:leading-[18px] lg:leading-[24px] w-[188px] md:w-[204px] lg:w-[254px] relative before:content-[''] before:block before:w-[6px] before:h-[6px] before:rotate-45 before:bg-white before:absolute before:top-1 lg:before:top-2"
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
