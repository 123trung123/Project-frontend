import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import CountUp from 'react-countup';
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png";
import img3 from "../assets/product3.png";

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" align="center" data-aos="fade-up" sx={{ mb: 2, color: "red" }}>
          About Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {images.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }} data-aos="fade-up" data-aos-delay={300 + index * 300}>
                <Box component="img" src={img} sx={{ width: '100%', height: 'auto', mb: 2 }} />
                <Typography variant="h3" sx={{ color: "red" }}>
                  <CountUp start={0} end={[1, 24, 10][index]} duration={4.5} />+
                </Typography>
                <Typography variant="h6" sx={{ color: "red" }}>
                  {[`Worldwide Stores`, `Gaming Products`, `Happy Clients`][index]}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
