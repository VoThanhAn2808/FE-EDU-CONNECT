import React from 'react';
import SLIDE from "./slide.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const data = [
  {
    avatar: SLIDE,
  },
  {
    avatar: SLIDE,
  },
  {
    avatar: SLIDE,
  },
  {
    avatar: SLIDE,
  },
];

function Slide() {
  return (
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={avatar} alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default Slide;