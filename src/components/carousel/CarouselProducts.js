import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./carousel.css";
import { getList } from "../../redux/productsSlice";
import { useDispatch } from "react-redux";
export default function CarouselProducts({ products }) {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getList())
  },[dispatch])
  return (
    <Row>
      {products.slice(0, 12).map((item, index) => (
        <Col lg={3} md={3} sm={6} xs={6} className="mb-4" key={item.id}>
          <Card className="contain">
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.subtitle}
              </CardSubtitle>
              <CardText>
                <p>{item.description}</p>
              </CardText>
              <div className="image-container"></div>
            </CardBody>
            <img className="image_carousel" src={item.picture}></img>
            <Link className=" btn-chi-tiet" to={`/detail/${item.id}`}>
              Chi tiết
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
