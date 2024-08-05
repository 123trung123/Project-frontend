import React from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import "./payment.css";

export default function Payment() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="payment-container">
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            Payment Information
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: 600,
                  margin: "0 auto",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Your Cart
                </Typography>
                {cart.length === 0 ? (
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    Your cart is empty
                  </Typography>
                ) : (
                  <>
                    {cart.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          mb: 2,
                        }}
                      >
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body1">Qty: {item.quantity}</Typography>
                        <Typography variant="body1">Price: {item.price}</Typography>
                      </Box>
                    ))}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      Total Price: {totalPrice}
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: 600,
                  margin: "0 auto",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Payment Details
                </Typography>
                <form noValidate autoComplete="off" style={{ width: "100%" }}>
                  <TextField fullWidth label="Name" variant="outlined" margin="normal" required />
                  <TextField fullWidth label="Email" variant="outlined" margin="normal" required />
                  <TextField fullWidth label="Address" variant="outlined" margin="normal" required />
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: "#ff5722" }} type="submit">
                    Make Payment
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
