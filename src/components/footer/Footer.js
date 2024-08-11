import React from "react";
import { Container, Grid, Typography, Box, Divider, IconButton, CardContent } from "@mui/material";
import logo from "../assets/l.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" gutterBottom>
                <img src={logo} alt="Logo" className="footer-logo" />
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên Kết Hữu Ích
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 1 }} />
              <Link to="/" className="footer-link">Trang Chủ</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <ShoppingBagIcon sx={{ mr: 1 }} />
              <Link to="/products" className="footer-link">Sản Phẩm</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <ShoppingCartIcon sx={{ mr: 1 }} />
              <Link to="/cart" className="footer-link">Giỏ Hàng</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <ContactMailIcon sx={{ mr: 1 }} />
              <Link to="/contact" className="footer-link">Liên Hệ</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <InfoIcon sx={{ mr: 1 }} />
              <Link to="/aboutus" className="footer-link">Thông Tin Thêm</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <InfoIcon sx={{ mr: 1 }} />
              <Link to="/reviews" className="footer-link">Đánh Gía</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <InfoIcon sx={{ mr: 1 }} />
              <Link to="/aboutus" className="footer-link">Terms of Service</Link>
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4, mb: 2, borderColor: "#555" }} />
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">
              Dia Chi: Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body2">
              Mon - Fri: 9am - 5pm
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, textDecoration: "underline" }}
            >
              <Link to="/contact" className="footer-link">Send Message</Link>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton className="footer-icon" color="inherit" href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton className="footer-icon" color="inherit" href="#">
              <InstagramIcon />
            </IconButton>
            <IconButton className="footer-icon" color="inherit" href="#">
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 2, pb: 2, color: "#bbb" }}>
          <Typography variant="body2">
            © 2024 Trung. All rights reserved. - TechTrends
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
