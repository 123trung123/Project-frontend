import React from "react";
import { Container, Grid, Typography, Link, Box, Divider } from "@mui/material";
import logo from "../assets/l.png";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#F3F4F6", color: "black", mt: 4 }}>
      <Container maxWidth="fluid">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              <img src={logo} alt="Logo" width="200" height="50" />
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên Kết Hữu Ích
            </Typography>
            <Typography variant="body2">
              <Link href="/" color="inherit" underline="none">
                Trang Chủ
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/products" color="inherit" underline="none">
                Sản Phẩm
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/cart" color="inherit" underline="none">
                Giỏ Hàng
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/payment" color="inherit" underline="none">
                  Thanh Toán
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" color="inherit" underline="none">
                Liên Hệ
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên Hệ
            </Typography>
            <Typography variant="body2">Điện thoại: 000 000 0000</Typography>
            <Typography variant="body2">Email: info@ctsvn.vn</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4 }} />
      </Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          sx={{ py: 1 }}
          style={{ background: "transparent" }}
        >
          © 2024 Trung. All rights reserved. - TechTrends
        </Typography>
      </Box>
    </Box>
  );
}
