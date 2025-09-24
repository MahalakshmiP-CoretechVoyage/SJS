import React from "react";
import { Button, Stack, Typography } from "@mui/material";

export default function ContactUsButton() {
  return (
    <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#378FED",
          color: "#fff",
          boxShadow: "none",
          textTransform: "none",
          width: { xs: "50px", sm: "150px", md: "170px" }, // responsive width
          height: { xs: "20px", sm: "45px", md: "50px" },   // responsive height
          border: "none",
          "&:hover": { backgroundColor: "#2f7bd1" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.30rem", sm: "1rem", md: "1.25rem" }, // responsive font size
          }}
        >
          Contact Us
        </Typography>
      </Button>
    </Stack>
  );
}
