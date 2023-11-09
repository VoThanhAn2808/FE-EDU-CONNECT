import './SlideFeedback.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Typography, Rating} from '@mui/material';
import 'swiper/css/navigation';
import StarIcon from '@mui/icons-material/Star';

const data = [
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
  {
    para: ' Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện.',
    src: 'https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg',
    name: 'Thanh Tuấn',
    Star: StarIcon
  },
];
function SlideFeedback() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',         
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        slidesPerView={3}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Typography>{item.para}</Typography>
            <img src={item.src} alt={`Slide ${index}`} style={{height:"150px", width:"150px"}}/>
            <Typography>{item.name}</Typography>
            <Rating
                            name="five-star-rating"
                            value={5}
                            max={5}
                            readOnly
                            emptyIcon={<StarIcon style={{ fontSize: '30px', color: '#e0e0e0' }} />}
                            icon={<StarIcon style={{ fontSize: '30px', color: '#ffc107' }} />}
                            sx={{
                                fontSize: '20px',
                                marginLeft: '5%'
                            }}
                        />  
            
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

export default SlideFeedback;
