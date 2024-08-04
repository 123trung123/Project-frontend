import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sale.css";
import {Box,Container,Grid,Typography,Card,CardContent,} from "@mui/material";
import img1 from "../assets/Keyboard1.png"

export default function Sale() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="sale-container">
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }} data-aos="fade-up">
        <p className="Title1">Sa<span className="innerTitle">le</span></p>
      </Typography>
      <Box sx={{ py: 5 }}>
        <Container style={{ maxWidth: "1500px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5} data-aos="fade-right" style={{margin:"auto 0"}}>
              <Typography variant="h5" className="special-price-title">
                Get Special Price
              </Typography>
              <Typography variant="h2" className="discount">
                Up to 50% Off
              </Typography>
              <Typography variant="body1" className="tagline">
                Trusted by pros. Made for winners.
              </Typography>
              <Typography variant="body2" className="time-running-out">
                This time running out
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
            <Grid item xs={12} md={7} data-aos="fade-left">
              <img src={img1} className="responsive-image" alt="Sale Image" />
            </Grid>
          </Grid>
          {/* <Grid container spacing={4} className="products-section">
            <Grid item xs={12} sm={12} data-aos="zoom-in">
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    PlayStation 5 DualSense Wireless Controller
                  </Typography>
                  <Typography variant="body2">
                    Rated 3.75 out of 5 (5 reviews)
                  </Typography>
                  <Typography variant="body1">$51.70 – $935.37</Typography>
                  <Typography variant="body2">
                    Availability: In Stock
                  </Typography>
                  <Typography variant="body2">Free gift included</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
        </Container>
      </Box>
    </div>
  );
}
