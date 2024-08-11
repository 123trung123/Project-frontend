import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rating, Typography } from "@mui/material";
import "./bestseller.css";
import { red } from '@mui/material/colors';

export default function BestSeller({ products }) {
  const dispatch = useDispatch();
  const danger = red[500];
  useEffect(() => {
    AOS.init();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Optional: Show confirmation alert
    // Swal.fire({
    //   text: "Item has been added to cart!",
    //   icon: "success"
    // });
  };

  return (
    <>
      <p className="Title" data-aos="zoom-in">
        Best <span className="innerTitle">Sellers</span>
      </p>
      {products.slice(0, 4).map((item, index) => (
            <Col
            lg={3}
            md={3}
            sm={6}
            xs={6}
            className="mb-4"
            key={item.id}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay={`${1000 - index * 250}`}
          >
            <Card className="product-card h-100 d-flex flex-column">
              <div className="product-image-container">
                	<Link
                  to={`/detail/${item.id}`}
                  >
                  <img className="product-image" src={item.picture} alt={item.name} />
                </Link>
              </div>
              <CardBody>
                <CardTitle tag="h5" className="product-title">
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="h5" color={danger}>${item.price}</Typography>
                </CardTitle>
                <CardText>
                  <Rating name="read-only" value={item.rating} readOnly precision={0.1} />
                  <Typography variant="body2" color="text.secondary" className="product-description">
                    {item.description}
                  </Typography>
                </CardText>

              </CardBody>
              <div className="d-flex justify-content-between mt-2">
                <Link
                  className="btn-chi-tiet px-1"
                  to={`/detail/${item.id}`}
                >
                  View
                </Link>
                <button
                  className="btn-chi-tiet"
                  onClick={() => handleAddToCart(item)}
                >
                  Add
                </button>
              </div>
            </Card>
          </Col>
      ))}
    </>
  );
}
