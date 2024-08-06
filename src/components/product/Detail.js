import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CardActions,Typography, Rating } from "@mui/material";
import { getList } from "../../redux/productsSlice";
import "./detail.css";
import { addToCart } from "../../redux/cartSlice";

export default function Detail() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const pro = products.find((item) => item.id === id);
  const dispatch = useDispatch();
  const handle_add = (x) => {
    dispatch(addToCart(x));
  };
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className="detail-container">
      <Row className="justify-content-center">
        <Col md={3}>
            <div className="thumbnail-container">
              <img className="thumbnail "src={pro.picture} alt="fake"></img>
            </div>
        </Col>
        <Col md={6}>
          {pro ? (
            <div className="product-detail">
              <Typography variant="h4" component="div" className="product-name">
                {pro.name}
              </Typography>
              <Rating name="read-only" value={pro.rating} readOnly />
              <Typography variant="body2" color="text.secondary" className="product-description">
                {pro.description}
              </Typography>
              <Typography variant="h5" component="div" className="product-price">
                ${pro.price} <span className="original-price">${pro.originalPrice}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary" className="product-availability">
                Availability: {pro.availability ? 'In Stock' : 'Out of Stock'}
              </Typography>
              <div className="countdown">
                <Typography variant="body1" component="div">
                  This time running out
                </Typography>
                <div className="timer">
                  <div>
                    <span className="time-value">158</span> Days
                  </div>
                  <div>
                    <span className="time-value">10</span> Hrs
                  </div>
                  <div>
                    <span className="time-value">15</span> Mins
                  </div>
                  <div>
                    <span className="time-value">05</span> Secs
                  </div>
                </div>
              </div>
              <CardActions>
                <Button onClick={()=>handle_add(pro)} >
                  Add to Cart
                </Button>
              </CardActions>
            </div>
          ) : (
            <Typography variant="h6" color="text.secondary">
              Product not found
            </Typography>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
