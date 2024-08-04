import React from "react";
import { Button, Card, CardBody, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className="my-4 text-center">Your Cart</h2>
        <Row>
          {cart.length === 0 ? (
            <Col>
              <h4 className="text-center">Your cart is empty</h4>
            </Col>
          ) : (
            cart.map((item, index) => (
              <Col key={index} sm="12" md="6" lg="4" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>Quantity: {item.quantity}</CardText>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </Button>
                    {/* <td><Button onClick={()=>updateById(item.id,0)}>-</Button><span>{item.quantity}</span>
                    <Button onClick={()=>updateById(item.id,1)}>+</Button></td> */}
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

