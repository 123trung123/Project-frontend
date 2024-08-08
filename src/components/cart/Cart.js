import React, { useEffect } from "react";
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
import { deleteFromCart, updateCartItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'
import "./cart.css"

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
const updateById = (item,flag)=>{
  dispatch(updateCartItem({id:item.id,flag}));
}
  const handleDelete = (id) => {
    Swal.fire({
      // title: "Are you sure?",
      text: "Bạn có muốn xóa khỏi danh sách",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
      cancelButtonText:"Không"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(id));
        Swal.fire({
          title: "Đã Xóa!",
          text: "Sản phẩm đã được xóa khỏi danh sách.",
          icon: "success"
        });
      }
    });
    
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, []);
  
  return (
    <>
      <Container>
        <p className="Title" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
          Your Cart<span className="innerTitle"></span>
        </p>
        <Row>
          {cart.length === 0 ? (
            <Col data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500">
              <h4 className="text-center">Giỏ hàng của bạn trống</h4>
            </Col>
          ) : (
            cart.map((item, index) => (
              <Col key={index} sm="6" md="6" lg="4" className="mb-4" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration={`${500+index*50}`}
              data-aos-delay={`${500+index*250}`}>
                <Card>
                  <img
                    src={item.picture}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <Divider />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>Giá: {item.price}$</CardText>
                    <CardText>Chi Tiết: {item.description}</CardText>
                    <td ><button className="add_button" onClick={()=>updateById(item,0)}>-</button> <span>Số lượng: {item.quantity} </span>
                    <button className="add_button" onClick={()=>updateById(item,1)}>+</button></td> 
                    <Divider sx={{ my: 2 }} />
                    <Button
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Xóa Sản Phẩm
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <div className="text-center" data-aos="fade-up"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500">
          <Link to="/payment" >
           <Button className="my-4">Thanh Toán</Button> 
          </Link>
        </div>
      </Container>
    </>
  );
}

