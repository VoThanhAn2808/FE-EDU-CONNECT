import "./Slide.css";
import React from 'react';
import SLIDE from "./slide.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box } from "@mui/material";

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
    <Box sx={{ height: "auto"}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index} className="slider">
              <div className="client__avatar">
                <img src={avatar} alt={`Slide ${index}`}/>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slide;