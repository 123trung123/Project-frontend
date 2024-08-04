import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import "./detail.css"
export default function Detail() {
  const { id } = useParams();
  const [items, setItems] = useState([
    // { id: 1, img: "https://react-bootstrap-lovat.vercel.app/img/slide-1.png" },
    // { id: 2, img: "https://react-bootstrap-lovat.vercel.app/img/slide-2.png" },

    { id: 1, img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png" },
    { id: 2, img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png" },
    { id: 3, img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png" },
    { id: 4, img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png" },
    { id: 5, img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png" },
    { id: 6, img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png" },
    { id: 7, img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png" },
    { id: 8, img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png" },
    { id: 9, img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png" },
    { id: 10, img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png" },
    { id: 11, img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png" },
    { id: 12, img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png" },
    { id: 13, img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png" },
    { id: 14, img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png" },
    { id: 15, img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png" },
    { id: 16, img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png" },

    { id: 17, img: "https://react-bootstrap-lovat.vercel.app/img/blog-1.png" },
    { id: 18, img: "https://react-bootstrap-lovat.vercel.app/img/blog-2.png" },
    { id: 19, img: "https://react-bootstrap-lovat.vercel.app/img/blog-3.png" },
    { id: 20, img: "https://react-bootstrap-lovat.vercel.app/img/blog-4.png" },
    // { id: 5, img: "https://react-bootstrap-lovat.vercel.app/img/blog-5.png" },
    // { id: 6, img: "https://react-bootstrap-lovat.vercel.app/img/blog-6.png" },
  ]);
  return (
    <div>
      <Row>
        {items.map((item, index) =>
          id == item.id ? <img src={item.img}></img> : <p></p>
        )}
      </Row>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
