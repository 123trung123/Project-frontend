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
        <Col md={4}>
            <div className="thumbnail-container">
              <img className="thumbnail "src={pro.picture} alt="fake"></img>
            </div>
        </Col>
        <Col md={4}>
          {pro ? (
            <>
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
              <Typography variant="body2" color="text.secondary" className="product-category">
                Category: {pro.category}
              </Typography>

              <CardActions>
                <Button onClick={()=>handle_add(pro)} >
                  Add to Cart
                </Button>
              </CardActions>
            </div>
            <div className="product-detail">
            <Typography variant="h5"  className="product-description">
                Details:  
              </Typography>
            <Typography variant="body2" color="text.secondary" className="product-description">
                {pro.descriptionLong}
              </Typography>
              </div>
            </>
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
            <Button className="m-3">Trang Chủ</Button>
          </Link>
          <Link to="/products" >
            <Button className="m-3">Của Hàng</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
