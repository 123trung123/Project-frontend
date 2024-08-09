import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import Slider from 'react-slick';

import img1 from '../assets/nvidia.png';
import img2 from '../assets/corsair.png';
import img3 from '../assets/msi.png';
import img4 from '../assets/logitech.png';
import img5 from '../assets/amd.png';

const slideImages = [img1, img2, img3, img4, img5];

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 0,
  pauseOnHover: true,
  cssEase:"linear"
};

export default function Relatedbrand() {
  return (
    <Container maxWidth="lg" style={{ overflow: "hidden"  }}>
      <Divider />
      <p className="Title" style={{fontSize:30}}>
        Brands <span className="innerTitle"></span>
      </p>
      <Box sx={{ py: 8 }}>
        <Slider {...sliderSettings}>
          {slideImages.map((img, index) => (
            <div key={index}>
              <img className="logo_brand" src={img} alt={`brand-${index}`} style={{ width: '70%' , margin:"0 auto" }} />
            </div>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
