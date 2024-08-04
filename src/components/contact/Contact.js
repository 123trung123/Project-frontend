import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import "./contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container">
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4 }}
            data-aos="fade-up"
          >
            <p className="Title">
              Contact <span className="innerTitle">Us</span>
            </p>
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-right">
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
                  We’d love to hear from you!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Please fill out the form below and we’ll get back to you as
                  soon as possible.
                </Typography>
                <form noValidate autoComplete="off" style={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#ff5722" }}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography variant="h6" className="contact-info-title">
                Contact Information
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Email:</strong> contact@company.com
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Phone:</strong> +123 456 7890
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Address:</strong> 123 Street, City, Country
              </Typography>
              <Typography variant="body2" className="contact-note">
                We are here to answer any questions you may have. Reach out to
                us and we'll respond as soon as we can.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
