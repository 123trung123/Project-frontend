import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import "./bestseller.css";

export default function BestSeller({ products }) {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);
  const handleAddToCart = (x) => {
    dispatch(addToCart(x));
  };
  return (
    <>
      <p className="Title">
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
          <Card className="dg">
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.subtitle}
              </CardSubtitle>
              <CardText>
                <p>{item.description}</p>
                <div className="image-container">
                  <img className="image_seller" src={item.picture} />
                </div>
              </CardText>
            </CardBody>
            <div style={{display:"flex"}}>
            <Link className=" btn-chi-tiet" to={`/detail/${item.id}`}>
              Chi tiết
            </Link>
            <Link className=" btn-chi-tiet"
                to="/products"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Mua
              </Link>
            {/* <button className=" btn-chi-tiet" onClick={() => handleAddToCart(item)}>Buy</button> */}
            </div>
            {/* <Button onClick={() => handleAddToCart(item)}>Add vao xe</Button> */}

          </Card>
        </Col>
      ))}
    </>
  );
}
