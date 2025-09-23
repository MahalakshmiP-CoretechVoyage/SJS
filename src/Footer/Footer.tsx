import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FAFAFA",
        pt: 10,
        pb: 5,
        px: { xs: 2, md: 6 },
        mt: 10,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#C00000" }}>
            SJS Safe Travels
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}
          >
            {"Safe, reliable, tech-enabled\nemployee transport for stress-\nfree daily commutes"}
          </Typography>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ml:10}}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Company
          </Typography>
          <Box
            sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 0.5 }}
          >
            <Link href="#" underline="none" color="inherit"  variant="body2"
            sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}>
              FAQ
            </Link>
            <Link href="#" underline="none" color="inherit"  variant="body2"
            sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}>
              Help Center
            </Link>
            <Link href="#" underline="none" color="inherit"  variant="body2"
            sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}>
              Feedback
            </Link>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={6} md={4}  sx={{ ml: { xs: 4, md: 10 } }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 3 }}
          >
            <Link href="#" underline="none" color="inherit" variant="body2"
             sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}>
              Privacy and policy
            </Link>
            <Link href="#" underline="none" color="inherit" variant="body2"
             sx={{ color: "#4A4A4A", lineHeight: 1.6, whiteSpace: "pre-line" }}>
            
              Terms and conditions
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Links and Copyright */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // stack on mobile & desktop
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mt: 6,
          textAlign: "center",
        }}
      >
        {/* Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Link href="#" underline="none" color="inherit" variant="body1">
            Home
          </Link>
          <Typography>|</Typography>
          <Link href="#" underline="none" color="inherit" variant="body1">
            About
          </Link>
          <Typography>|</Typography>
          <Link href="#" underline="none" color="inherit" variant="body1">
            Contact Us
          </Link>
        </Box>

        {/* Copyright */}
        <Typography variant="body1" sx={{ mt: 1, color: "#666" }}>
          © {new Date().getFullYear()} SJS Private Limited crafted by{" "}
          <Link href="#" underline="none" color="#3796FC">
            Coretechvoyage
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
