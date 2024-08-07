import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import "./payment.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Payment() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, []);
  return (
    <div className="payment-container">
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }} data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500">
           Thông tin Giao Dịch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: 600,
                  margin: "0 auto",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: 2,
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Giỏ Hàng
                </Typography>
                {cart.length === 0 ? (
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    Giỏ Hàng Của Bạn Rỗng
                  </Typography>
                ) : (
                  <>
                    {cart.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          mb: 2,
                        }}
                      >
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body1">Số Lượng: {item.quantity}</Typography>
                        <Typography variant="body1">Giá: {item.price} $</Typography>
                      </Box>
                    ))}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      Tổng Chi Phí: {totalPrice} $
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                data-aos="fade-up"
                data-aos-duration="2000"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: 600,
                  margin: "0 auto",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Thông Tin
                </Typography>
                <form noValidate autoComplete="off" style={{ width: "100%" }}>
                  <TextField fullWidth label="Tên" variant="outlined" margin="normal" required />
                  <TextField fullWidth label="Email" variant="outlined" margin="normal" required />
                  <TextField fullWidth label="Địa Chỉ" variant="outlined" margin="normal" required />
                  <Button sx={{ mt: 2, backgroundColor: "#ff5722" }} type="submit">
                    Trả Tiền
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
