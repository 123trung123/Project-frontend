import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f1f2f7" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 2 }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We'd Love to Hear From You!
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4 }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Have any questions or feedback? Feel free to reach out to us, and
          we'll get back to you as soon as possible.
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#dd3431",
              color: "#ffffff",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#B02927",
              },
            }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Contact Us
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
