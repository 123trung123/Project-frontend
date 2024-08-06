import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import img1 from "../assets/iconfe.png";
import img2 from "../assets/iconma.png";
export default function Review() {
  return (
    <div className="review">
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4 }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Đánh Giá
          </Typography>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "350px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={img1}
                  alt="Alice Johnson"
                  sx={{ width: 100, height: 100, borderRadius: "50%", mt: 2 }}
                />
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="h6">Alice Johnson</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    "Absolutely love the products! Great quality and fast
                    shipping."
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">★★★★★</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="300"
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "350px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={img2}
                  alt="Bob Smith"
                  sx={{ width: 100, height: 100, borderRadius: "50%", mt: 2 }}
                />
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="h6">Bob Smith</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    "Excellent customer service and a wide range of options.
                    Highly recommend!"
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">★★★★☆</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="600"
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "350px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={img2}
                  alt="Charlie Brown"
                  sx={{ width: 100, height: 100, borderRadius: "50%", mt: 2 }}
                />
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="h6">Charlie Brown</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    "The best shopping experience I've had. Will definitely be
                    back!"
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">★★★★☆</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
