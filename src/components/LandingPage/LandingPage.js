import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import img1 from "../assets/keyboard.png";
import img2 from "../assets/product2.png"
import img3 from "../assets/product3.png"
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import BestSeller from "../bestsellers/BestSeller";
import { Row } from "reactstrap";
import { getList } from "../../redux/productsSlice";
import Features from "../feature/Features";
import CarouselMain from "../carousel/CarouselMain";
import Sale from "../sale/Sale";
import ContactUs from "../contact/ContactUs";
import Review from "../Review/Review";
import Relatedbrand from "../relatedbrand/Relatedbrand";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from 'react-slick';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const images = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
  ];
  useEffect(() => {
    dispatch(getList());
    Aos.init({ duration: 1000 });
  }, [dispatch]);
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear"
  };
  return (
    <div className="lander">
      <Container maxWidth={false} className="holder">
        <div className="first">
        <Box className="backgroundLanding"
            sx={{
              width: "100%",
              height: "50%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Container className="image_container" style={{ }}>
              <Slider {...sliderSettings}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img.src}
                      style={{
                        width: '60%',height:"auto",
                   objectFit: 'contain', margin: '0 auto' 
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </Container>
            <Typography variant="h1" sx={{ color: "#ffffff", mb: 2 }}>
              Test
            </Typography>
            <Typography variant="body1" sx={{ color: "#ffffff", mb: 2 }}>
              Test
            </Typography>

            <Link className="appbar"
              to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Mua
            </Link>
          </Box>
        </div>

        <Container>
          <Row className="py-5" style={{overflow:"hidden"}}>
            <BestSeller products={products} />
          </Row>
        </Container>
        <Features />
        <Box sx={{ py: 8 }}>
          <Container>
            <div className="d-flex">
            <p className="Title"  data-aos="fade-right">
              All  
            </p>
            <div style={{ width: '20px' }}></div>
            <p className="Title"  data-aos="fade-left">
              <span className="innerTitle" > Items</span>
            </p>
            </div>
            <CarouselMain products={products} />
          </Container>
        </Box>
        <Relatedbrand/>
        <Sale />
      <ContactUs/>
      <Review/>
      </Container>
    </div>
  );
}
