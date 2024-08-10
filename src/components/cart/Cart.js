import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCartItem } from "../../redux/cartSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2';
import "./cart.css";
import { Card } from "reactstrap";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const updateById = (item, flag) => {
    dispatch(updateCartItem({ id: item.id, flag }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      text: "Bạn có muốn xóa khỏi danh sách",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
      cancelButtonText: "Không"
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
 const handlePay=()=>{
  Swal.fire({
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
 }
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="fluid">
      <Box sx={{ py: 8 }}>
        <Typography className="lander" variant="h3" sx={{ textAlign: "center", mb:8 }} data-aos="fade-down" data-aos-duration="1500">

            Giỏ Hàng & Thông Tin Giao Dịch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                alignItems: "center",
                margin: "0 auto",
                padding: 2,
                backgroundColor: "#ffffff",
                borderRadius: 1,
                boxShadow: 3,
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Giỏ Hàng
              </Typography>
              <Divider/>
              {cart.length === 0 ? (
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Giỏ Hàng Của Bạn Rỗng
                </Typography>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <>
                    <Box className="submit_buy"
                      key={index}
                      style={{display:"flex",alignItems: "center"}}
                      
                    >
                      <img className="cart-preview m-3 " src={item.picture} alt={item.name} style={{ height: "100px", objectFit: "contain", }} />
                      <div style={{flex:1}}>
                      <Typography variant="h5" sx={{my:1}}>{item.name}</Typography>
                      <Typography variant="body1">Giá: {item.price} $</Typography>
                      <Typography variant="body1">Số Lượng: {item.quantity}</Typography>
                      </div>
                      <Box sx={{ }}>
                        <Button variant="outlined" color="secondary" onClick={() => updateById(item, 0)}>
                          -
                        </Button>
                        <Button variant="outlined" color="primary" onClick={() => updateById(item, 1)}>
                          +
                        </Button>
                        <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                          Xóa
                        </Button>
                      </Box>
                    </Box>
                    <Divider/>
                    </>
                  ))}
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className="divborder">
            <Box
              data-aos="fade-left"
              data-aos-duration="1500"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 auto",
                padding: 2,
                backgroundColor: "#ffffff",
                borderRadius: 1,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Đơn Hàng
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Card>Hello</Card>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Tổng Chi Phí: {totalPrice} $
              </Typography>
              <Button onClick={()=>handlePay()} className="submit_buy" sx={{ mt: 2, backgroundColor: "#ff0000", color: "white" }} type="submit">
                Trả Tiền
              </Button>
            </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
