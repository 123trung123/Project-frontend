import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import img1 from "../assets/keyboard.png";
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
// import Contact from "../contact/Contact";
import ContactUs from "../contact/ContactUs";
import Review from "../Review/Review";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const images = [
    {
      src: "path/to/your/image1.jpg",
      label: "Image 1",
      description: "Discover amazing products",
    },
    {
      src: "path/to/your/image2.jpg",
      label: "Image 2",
      description: "Explore our latest collection",
    },
    {
      src: "path/to/your/image3.jpg",
      label: "Image 3",
      description: "Find your perfect match",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return (
    <div className="lander">
      <Container maxWidth={false} className="holder">
        <div className="first">
        <Box
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
        backgroundColor: "#1a2038",
      }}
    >
      <img
        src={images[activeStep].src}
        alt={images[activeStep].label}
        style={{ width: "50%", height: "30%", objectFit: "cover" }}
      />
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          color: "white",
          backgroundColor: "#1a2038",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <Typography variant="h1" sx={{ color: "#ffffff", mb: 2 }}>
        {images[activeStep].label}
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff", mb: 2 }}>
        {images[activeStep].description}
      </Typography>
      <Button
        className="appbar"
        variant="contained"
        sx={{ backgroundColor: "#dd3431", color: "#ffffff" }}
      >
        <Link
          to="/products"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Mua
        </Link>
      </Button>
    </Box>
        </div>

        <Container>
          <Row className="py-5">
            <BestSeller products={products} />
          </Row>
        </Container>
        <Features />
        <Box sx={{ py: 8 }}>
          <Container>
            <p className="Title">
              All <span className="innerTitle">Items</span>
            </p>
            <CarouselMain products={products} />
          </Container>
        </Box>
        <Sale />
        {/* <Box sx={{ py: 8 }}>
          <Container>
            <Grid container spacing={1}>
              {products
                .filter((product) => product.sale)
                .slice(0, 4)
                .map((product) => (
                  <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="body2">
                          <span style={{ textDecoration: "line-through" }}>
                            ${product.originalPrice}
                          </span>{" "}
                          ${product.price}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          <Link
                            to={`/products/${product.id}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            View Details
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Box> */}
      <ContactUs/>
      <Review/>
      </Container>
    </div>
  );
}
