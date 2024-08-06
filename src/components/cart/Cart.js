import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <Container>
        <p className="Title">
          Your Cart<span className="innerTitle"></span>
        </p>
        <Row>
          {cart.length === 0 ? (
            <Col>
              <h4 className="text-center">Giỏ hàng của bạn trống</h4>
            </Col>
          ) : (
            cart.map((item, index) => (
              <Col key={index} sm="6" md="6" lg="4" className="mb-4">
                <Card>
                  <img
                    src={item.picture}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>Số lượng: {item.quantity}</CardText>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <div className="text-center">
          <Link to="/payment" >
           <Button className="my-4">Thanh Toán</Button> 
          </Link>
        </div>
      </Container>
    </>
  );
}

    {/* <td><Button onClick={()=>updateById(item.id,0)}>-</Button><span>{item.quantity}</span>
                    <Button onClick={()=>updateById(item.id,1)}>+</Button></td> */}