import React, { useEffect } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./product.css";
import Aos from "aos";
import Swal from 'sweetalert2';
import { Rating, Typography } from "@mui/material";

export default function Product({ products, onAddToCart }) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);

  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success"
    });
    dispatch(addToCart(product));
  };

  return (
    <Col
      lg={4}
      md={4}
      sm={6}
      xs={12}
      className="mb-4"
      data-aos={products.id % 2 === 0 ? "flip-left" : "flip-right"}
      data-aos-duration="1500"
    >
      <Card className="product-card">
        <div className="product-image-container">
          <img className="product-image" src={products.picture} alt={products.name} />
        </div>
        <CardBody>
          <CardTitle tag="h5" className="product-title">
            <Typography variant="h6">{products.name}</Typography>
            <Typography variant="h5" >${products.price}</Typography>
          </CardTitle>
          <CardText>
            <Rating name="read-only" value={products.rating} readOnly precision={0.1} />
            <Typography variant="body2" color="text.secondary" className="product-description">
              {products.description}
            </Typography>
          </CardText>
          <div className="d-flex mt-2 justify-content-between">
            <Link to={`/detail/${products.id}`} className="btn btn-link view-details-button">View Details</Link>
            <button className="btn btn-link view-details-button" onClick={() => handleAdd(products)} >
            Add to Cart
          </button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
