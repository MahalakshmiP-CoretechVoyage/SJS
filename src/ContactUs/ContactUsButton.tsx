import React from "react";
import { Button, Stack } from "@mui/material";
import {Typography} from "@mui/material"

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
    width:'170px',
    height:'50px',
    border: "none",
    "&:hover": { backgroundColor: "#2f7bd1" },
  }}
>
  <Typography variant="h6">Contact Us</Typography>
</Button>



    </Stack>
  );
}






