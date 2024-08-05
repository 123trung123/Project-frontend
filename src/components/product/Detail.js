import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import "./detail.css";
import { useSelector } from "react-redux";
export default function Detail() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const pro = products.find((item) => item.id === id);
  return (
    <div>
      <Row>
        {pro ? <p>Hel{pro.name}</p> : <p>Null</p>}
        <Link to={"/"}>Home</Link>
      </Row>
    </div>
  );
}
