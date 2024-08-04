import React, { useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import "./bestseller.css"

export default function BestSeller({ products }) {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <>
    <p className="Title">Best <span className="innerTitle">Sellers</span></p>
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
                <img  className="image" src={item.picture}/>
              </div>
                {/* onClick={() => handleAddToCart(item.id)} */}
              </CardText>
            </CardBody>
              <Link className=" btn-chi-tiet" to={`/detail/${item.id}`}>Chi tiết</Link>
          </Card>
        </Col>
      ))}
    </>
  );
}
