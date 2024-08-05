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
import Footer from "../footer/Footer";
import Header from "../header/Header";
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
      <Header />
      <Container>
        <h2 className="my-4 text-center">Your Cart</h2>
        <Row>
          {cart.length === 0 ? (
            <Col>
              <h4 className="text-center"> Gỉo hàng của bạn trống </h4>
            </Col>
          ) : (
            cart.map((item, index) => (
              <Col key={index} sm="12" md="6" lg="4" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <img
                      src={item.picture}
                      style={{ width: 200, height: 200 }}
                    ></img>
                    <CardText>So luong: {item.quantity}</CardText>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Xoa
                    </Button>
                    {/* <td><Button onClick={()=>updateById(item.id,0)}>-</Button><span>{item.quantity}</span>
                    <Button onClick={()=>updateById(item.id,1)}>+</Button></td> */}
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <div className="text-center my-4">
          <Link to="/payment" className="btn btn-primary">
            Thanh Toan
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}
