import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  InputBase,
  MenuItem as MuiMenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/l.png";
import { useSelector } from "react-redux";
import "./header.css";
import BreadcrumbsComponent from "../BreadCrumbs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MessageIcon from '@mui/icons-material/Message';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    Aos.init();
  }, []);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AppBar
        className="header_stick"
        position="static"
        sx={{ backgroundColor: "#F3F4F6", color: "black" }}
      >
        <Toolbar style={{ height: "80px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div style={{width:20}}></div>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#1E3A8A" }}>
              <img src={logo} alt="Logo" width="200" height="50" />
            </Link>
          </Typography>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              maxWidth: "400px",
            }}
          >
            <InputBase
              placeholder="Tìm kiếm…"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                color: "white",
                backgroundColor: "#6c757d",
                borderRadius: "4px",
                padding: "4px 8px",
                flexGrow: 1,
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
            />
            <IconButton onClick={handleSearchSubmit} sx={{ color: "black" }}>
              <SearchIcon />
            </IconButton>
          </div>
          <IconButton className="cartstyle" color="inherit" sx={{ padding: 0 }}>
            <Badge badgeContent={cart.length} color="error">
              <Link
                to="/cart"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <div
            className=" Menubar"
            style={{ width: 250, backgroundColor: "#fff", height: "100%" }}
          >
            <Typography
              variant="h6"
              data-aos="fade-down"data-aos-duration="900"
              sx={{
                padding: "46px",
                backgroundColor: "#F3F4F6",
                color: "black",
              }}
              className="menu"
            >
              Menu Bar
            </Typography>
            
            <Link to="/" style={{ textDecoration: "none" ,color: "black",}} >
             <MuiMenuItem sx={{ my: 2 }} data-aos="fade-left"data-aos-duration="900"data-aos-delay="0"> <HomeIcon/><div style={{width:20}}></div>Trang Chủ</MuiMenuItem>
            </Link>
            <Link to="/products" style={{ textDecoration: "none",color: "black", }}>
              <MuiMenuItem sx={{ my: 2 }} data-aos="fade-left"data-aos-duration="900" data-aos-delay="300"><ShoppingBagIcon/><div style={{width:20}}></div>Sản Phẩm</MuiMenuItem>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" ,color: "black",}}>
              <MuiMenuItem sx={{ my: 2 }} data-aos="fade-left"data-aos-duration="900" data-aos-delay="600"><ShoppingCartIcon/><div style={{width:20}}></div>Giỏ Hàng</MuiMenuItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" ,color: "black",}}>
              <MuiMenuItem sx={{ my: 2 }} data-aos="fade-left"data-aos-duration="900" data-aos-delay="900"><MessageIcon/><div style={{width:20}}></div>Liên Hệ</MuiMenuItem>
            </Link>
            <Divider className="m-0" />
          </div>
        </Drawer>
        <button className="totop" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
        <section className="call-button">
          <p className="cc-calto-action-ripple" to="">
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
              </svg>
            </i>
            <span className="num">+1234_567_890</span>
          </p>
        </section>
        <BreadcrumbsComponent />
      </AppBar>
    </>
  );
}
