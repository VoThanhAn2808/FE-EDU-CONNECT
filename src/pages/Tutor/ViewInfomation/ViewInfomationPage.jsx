import React, { useEffect, useState } from 'react';
import './ViewInfomation.css';
import { Box, Grid, li } from '@mui/material';
import Slide from '../../../assests/slide.jpg';

function ViewInfomationPage() {
  return (
    <Box className='body'>
      <Box>
        <img src={Slide} alt='Slide' className='Slide' />
      </Box>
      <Box className='container Item'>
        <Box className='Icon'>
          <i class='fas fa-users'></i>
          <h3>
            <b>1200</b>
          </h3>
          <Grid>Học sinh theo học</Grid>
        </Box>
        <Box className='Icon'>
          <i class='fas fa-book-open'></i>
          <h3>
            <b>4+</b>
          </h3>
          <Grid>Khóa học trên trang</Grid>
        </Box>
        <Box className='Icon'>
          <i class='fas fa-star'></i>
          <h3>
            <b>5+</b>
          </h3>
          <Grid>Số năm kinh nghiệm</Grid>
        </Box>
        <Box className='Icon'>
          <i class='fas fa-user'></i>
          <h3>
            <b>800</b>
          </h3>
          <Grid>Học sinh theo dõi</Grid>
        </Box>
        <Box></Box>
      </Box>
      <Box className='info'>
        <h1>Thông tin chung</h1>
        <Box className='detail-infor'>
          <Box>
            <iframe
              src='https://www.youtube.com/embed/DVX7bQqqTlI?si=ni7DadOFBSZ8I_gG'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </Box>
          <Box className='infoTutor'>
            <ul>
              <li>Giáo viên: Nguyễn Công Nguyên</li>
              <li>Bộ môn: Toán</li>
              <li>Nơi công tác: EduConnect</li>
              <li>Trình độ: Đại học</li>
              <li>Phụ trách lớp: 10, 11, 12</li>
            </ul>
            <Box className='social'>
              <p>
                <i class='fab fa-facebook'></i> Facebook
              </p>
              <p>
                <i class='fas fa-play'></i> EduConnect
              </p>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className='container teacher'>
        <h1>
          <strong>Đôi nét về thầy</strong>
        </h1>
        <Box className='teacher-infor'>
          <div className='teacher-item item-img'>
            <img
              src='data:image/jpeg;base64,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'
              alt=''
            />
          </div>
          <div className='teacher-item'>
            <p>
              <i class='fas fa-star'></i> Trình độ đại học
            </p>
            <p>
              <i class='fas fa-star'></i> Trình độ đại học
            </p>
            <p>
              <i class='fas fa-star'></i> Trình độ đại học
            </p>
            <p>
              <i class='fas fa-star'></i> Trình độ đại học
            </p>
          </div>
        </Box>
      </Box>

      <Box className='container method'>
        <h1>
          <strong>Phương pháp giảng dạy nổi bật</strong>
        </h1>
        <Box className='method-item'>
          <img
            src='https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/zgtzgo/2019_03_07/hinhanhnguoithay.jpg'
            alt=''
          />
          <img
            src='https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/zgtzgo/2019_03_07/hinhanhnguoithay.jpg'
            alt=''
          />
          <img
            src='https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/zgtzgo/2019_03_07/hinhanhnguoithay.jpg'
            alt=''
          />
          <img
            src='https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/zgtzgo/2019_03_07/hinhanhnguoithay.jpg'
            alt=''
          />
        </Box>
      </Box>
      <Box className='container feedback-box'>
      <h1><strong>Chia sẻ và cảm nhận của học sinh</strong></h1>
        <Box className='feedback'>
          <div className='comment'>
            <p>
              "Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong
              thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện."
            </p>
            <div className='infor-student'>
              <img
                src='https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg'
                alt=''
              />
              <h1>
                <strong>Thanh Tuấn</strong>
              </h1>
              <div>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
            </div>
          </div>
          <div className='comment'>
            <p>
              "Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong
              thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện."
            </p>
            <div className='infor-student'>
              <img
                src='https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg'
                alt=''
              />
              <h1>
                <strong>Thanh Tuấn</strong>
              </h1>
              <div>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
            </div>
          </div>
          <div className='comment'>
            <p>
              "Cảm ơn thầy rất nhiều nhờ thầy mà e không còn lo ngại đến hình không gian nữa mong
              thầy sẽ sớm có thêm những khóa học tiếp theo cho chúng em ôn luyện."
            </p>
            <div className='infor-student'>
              <img
                src='https://info-imgs.vgcloud.vn/2021/12/30/06/su-that-dang-sau-buc-anh-thay-giao-day-toan-dien-trai-dang-hot-ran-ran-tren-mang-xa-hoi-4.jpg'
                alt=''
              />
              <h1>
                <strong>Thanh Tuấn</strong>
              </h1>
              <div>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
export default ViewInfomationPage;
