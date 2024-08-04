import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, deleteProducts, editProduct, getList } from '../../redux/productsSlice';
import { addToCart, deleteFromCart } from "../../redux/cartSlice"


export default function Products() {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state.products)
    const handle_add_product = (item) => {
      dispatch(addProducts(item));
    };
    const handle_delete = (item) => {
      dispatch(deleteProducts(item));
    };
    const handle_edit_product = (item) => {
      dispatch(editProduct(item));
    };
    const handle_add_cart = (item) => {
      dispatch(addToCart(item));
    };
    const handle_delete_cart = (item) => {
      dispatch(deleteFromCart(item));
    };
    const test = dispatch(getList());
  useEffect(()=>{
    dispatch(getList())
  },[])
  return (
    <>
        <Row className="m-4">
        
          {
            products.map((item,index)=>(
                <Product className="d-flex" key={index} products={item}/>
            ))
          }
        </Row>
    </>
  )
}
