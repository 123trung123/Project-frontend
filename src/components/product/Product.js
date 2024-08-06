import React, { useEffect } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./product.css";
import Aos from "aos";

export default function Product({ products, onAddToCart }) {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init();
  }, []);
  const handle_add = (x) => {
    dispatch(addToCart(x));
  };

  return (
    <Col lg={3} md={4} sm={6} xs={6} className="mb-2" data-aos={`${(products.id%2===0?"flip-left":"flip-right")}`}
    data-aos-duration="1500"
    // data-aos-delay={`${0 + products.id * 100}`}
    >
      <Card className="Card_custom">
        <CardBody>
          <CardTitle tag="h5">{products.name}</CardTitle>
          <CardText>
            <Link className="links" to={`/detail/${products.id}`}>Chi tiết sản phẩm</Link>
          </CardText>
          <CardText>
            <div className="image-container"></div>
            <div>
              <img className="productpicture" src={`${products.picture}`} alt={products.name} />
            </div>
          </CardText>
          <Button onClick={() => handle_add(products)}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
