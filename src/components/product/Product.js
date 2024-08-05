import React, { useContext } from "react";
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
export default function Product({ products }) {
  const dispatch = useDispatch();
  const handle_add = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="mb-2">
      <Card>
        <CardBody>
          <CardTitle tag="h5"> {products.name}</CardTitle>
          <CardText>
            <Link to={`/detail/${products.id}`}>Chi tiết sản phẩm</Link>
          </CardText>
          <CardText>
            <img src={`${products.picture}`}></img>
          </CardText>

          <Button
            onClick={() => {
              handle_add(products);
            }}
          >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
