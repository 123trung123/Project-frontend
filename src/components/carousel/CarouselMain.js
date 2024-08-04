import React from "react";
import CarouselProducts from "./CarouselProducts";

const CarouselMain = ({ products }) => {
  console.log('CarouselMain - Products:', products);
  return <CarouselProducts products={products} />;
};

export default CarouselMain;
