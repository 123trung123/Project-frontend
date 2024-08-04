import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function CarouselProducts({ products }) {

  return (
    <Row>
      {products.slice(0, 16).map((item, index) => (
        <Col
          lg={3}
          md={3}
          sm={6}
          xs={6}
          className="mb-4"
          key={item.id}
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
                <img  className="image" src={item.picture} alt="none"/>
              </div>
              </CardText>
            </CardBody>
              <Link className=" btn-chi-tiet" to={`/detail/${item.id}`}>Chi tiết</Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
