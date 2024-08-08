import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png"
import img3 from "../assets/product3.png"
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
    Aos.init();
  }, [dispatch]);
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="lander">
      <Container maxWidth={false} className="holder">
        <div className="first">
        <Box className="backgroundLanding"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Container className="image_container" data-aos="fade-down"data-aos-duration="1500">
              <Slider  {...sliderSettings}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img.src}
                      className="landing_carousel"
                      style={{
                        width: '100%',height:"auto", objectFit: 'contain',margin:"0 auto"
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </Container>
            <Typography variant="h3" sx={{ color: "#ffffff", mb: 1 }} data-aos="fade-right"data-aos-duration="1500">
              Test
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }} data-aos="zoom-out"data-aos-duration="1500">
              Test
            </Typography>
            <Link className="appbar"
              to="/products"
              style={{ color: "inherit", textDecoration: "none" }}data-aos="zoom-out"data-aos-duration="1500"
            >
              Mua
            </Link>
          </Box>
        </div>

        <Container>
          <Row className="py-5 " style={{overflow:"hidden"}}>
            <BestSeller products={products} />
          </Row>
        </Container>
        <Features />
        <Box sx={{ py: 8 }}>
          <Container>
            <div className="d-flex">
            <p className="Title"  data-aos="fade-right"data-aos-duration="1500">
              All  
            </p>
            <div style={{ width: '20px' }}></div>
            <p className="Title"  data-aos="fade-left"data-aos-duration="1500">
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
