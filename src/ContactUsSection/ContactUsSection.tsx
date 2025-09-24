import * as React from "react";
import { Box, Button, InputLabel, FormControl, Card, Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import aboutUs from "../assets/AboutUs.png"; // background image
import Footer from "../Footer/Footer";

// Custom Input Styling
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: "15px",
    top:"20px",
    position: "relative",
    backgroundColor: "#FFFFFF",
    border: "0.5px solid #378FED",
    fontSize: 16,
    width: "100%",
    padding: "16px 14px",
    color: "#000",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#378FED", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#378FED",
    },
  },
}));

function SelectActionCard() {
  return (
    <>
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${aboutUs})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: {
          sm:3
        }
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          width: "100%",
          maxWidth: 1100,
          mt: 10,
        }}
      >
        {/* Left Card - Text + Features */}
        <Box
          sx={{
            
            borderRadius: 2,
            p: {
          sm:4
        },
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "800px" },
              lineHeight: 1.5,
            }}
          >
            Get in Touch with SJS Travels
          </Typography>
          <Typography
            variant="body2"
            sx={{
              maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
              lineHeight: 1.5,
              mt: 3,
            }}
          >
            Have a question, need a quote, or want to know more about our services? Whether it’s corporate travel, outstation trips, or customized tour packages, our team is always ready to help. Fill out the form below, and we’ll get back to you at the earliest.
          </Typography>

          {/* Feature Box */}
          <Card
            sx={{
              borderRadius: 2,
              minHeight: 200,
              backgroundColor: "#EFF5FF",
              border: "2px solid #9DB2D6",
              mt: 4,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Real-Time Tracking", "Easy Booking & Payments", "Reliable & On-Time Service"].map((text, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      backgroundColor: "#378FED",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon icon="icon-park-solid:correct" width="20" height="20" style={{ color: "#fff" }} />
                  </Box>
                  <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Star Rating */}
            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                {[...Array(5)].map((_, idx) => (
                  <Icon key={idx} icon="material-symbols:star" width="24" height="24" style={{ color: "#FFB509" }} />
                ))}
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" } }}>
                Verified & Professional Drivers
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" }, color: "#555" }}>
                Every driver is background-checked, well-trained, and focused on your safety and comfort.
              </Typography>
            </Box>
          </Card>
        </Box>




   <Card
  sx={{
    border: "2px solid #9DB2D6",
    borderRadius: 2,
    minHeight: 500,
    backgroundColor: "#EFF5FF",
    p: 3,
    maxWidth: 600,
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 2, 
  }}
>
  {/* Optional top section or spacing */}
  <Box sx={{ flexGrow: 1 }}></Box> 

  {/* Form Section */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 5}}>
    <Box sx={{ display: "flex", gap: 2 }}>
      <FormControl>
        <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
          First Name
        </InputLabel>
        <BootstrapInput />
      </FormControl>
      <FormControl >
        <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
          Last Name
        </InputLabel>
        <BootstrapInput />
      </FormControl>
    </Box>

    <FormControl fullWidth variant="standard">
      <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
        Email
      </InputLabel>
      <BootstrapInput />
    </FormControl>

    <FormControl fullWidth variant="standard">
      <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
        Phone
      </InputLabel>
      <BootstrapInput />
    </FormControl>

    <FormControl fullWidth variant="standard">
      <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
        Company
      </InputLabel>
      <BootstrapInput />
    </FormControl>

    <FormControl fullWidth variant="standard">
      <InputLabel shrink sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}>
        Describe the transportation you are looking for
      </InputLabel>
      <BootstrapInput multiline rows={3} />
    </FormControl>

    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: 2,
        height:"50px",
        backgroundColor: "#378FED",
        borderRadius: "10px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "bold",
        color:'#fff',
        "&:hover": { backgroundColor: "#2f77d2" },
      }}
    >
      Submit
    </Button>
  </Box>
</Card>

      </Box>
    </Box>


<Box sx={{ mt: '-80px', width: '100%' }}>
  <Footer />
</Box>

   

    </>
  );
}

export default SelectActionCard;








