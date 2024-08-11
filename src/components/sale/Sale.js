import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sale.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../assets/Keyboard1.png";

export default function Sale() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="sale-container">
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }} data-aos="fade-up">
        <p className="Title1">Sa<span className="innerTitle">le</span></p>
      </Typography>
      <div style={{ padding: 25 }}>
        <Container sx={{overflow: "hidden"}}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5} data-aos="fade-right" sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="h5" className="special-price-title">
                Giá đặc biệt
              </Typography>
              <Typography variant="h2" className="discount">
                Giảm tới 50%
              </Typography>
              <Typography variant="body1" className="tagline">
                Tin tưởng bởi nhiều người.
              </Typography>
              <Typography variant="body2" className="time-running-out">
                Nhanh tay mua.
              </Typography>
              <div className="countdown">
                <div className="countdown-item">
                  00 <span>Days</span>
                </div>
                <div className="countdown-item">
                  00 <span>Hours</span>
                </div>
                <div className="countdown-item">
                  00 <span>Mins</span>
                </div>
                <div className="countdown-item">
                  00 <span>Secs</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center", alignItems: "center",  }}>
              <img
                data-aos="fade-left"
                src={img1}
                className="responsive-image"
                alt="Sale"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
