import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import ContactUs from "../pages/ContactUs";
import rectange from "../assets/Rectangle .png"
import cardImage1 from "../assets/cardImage1.png"
import cardImage2 from "../assets/cardImage2.png"
import cardImage3 from "../assets/cardImage3.png"
import cardImage4 from "../assets/cardImage4.png"
import WhyChooseUs from "../assets/WhyChooseUs.png"
import { Icon } from '@iconify/react';
import { useEffect, useState, useRef } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import skodaImage from "../assets/skodaImage.jpg"
import Vector from "../assets/Vector.png"
import Footer from "../Footer/Footer";
import PopupDialog from "../popupDialog/popupDialog";


function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePopups, setVisiblePopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
  });
  const popupSectionRef = useRef(null);
  const [popupSectionVisible, setPopupSectionVisible] = useState(false);



  const texts = [
    { label: "Modern Corporate Workforces", color: "#57BAE5" },
    { label: "Stress-Free Daily Commutes", color: "#567AE5" },
    { label: "Smart Tech-Enabled Travel", color: "#B286EC" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // change text every 2 seconds
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (!popupSectionVisible) return;

    const timers = [
      setTimeout(() => setVisiblePopups((v) => ({ ...v, popup1: true })), 1000),
      setTimeout(() => setVisiblePopups((v) => ({ ...v, popup2: true })), 2000),
      setTimeout(() => setVisiblePopups((v) => ({ ...v, popup3: true })), 3000),
      setTimeout(() => setVisiblePopups((v) => ({ ...v, popup4: true })), 4000),
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [popupSectionVisible]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPopupSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (popupSectionRef.current) {
      observer.observe(popupSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <Grid container sx={{ p: { xs: 2, sm: 4, md: 10 } }}> {/* smaller padding on mobile */}

        <Grid container justifyContent="flex-start">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "740px" },
                wordWrap: "break-word",
                lineHeight: 1.4,
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.25rem", lg: "2.5rem" }, // smaller font for mobile
                textAlign: { xs: "center", sm: "left" }, // center on mobile
                mx: { xs: "auto", sm: 0 }, // center block horizontally on mobile
              }}
            >
              The Nationwide All-In-One Ground Transportation Solution for
            </Typography>
          </Grid>

          {/* color text */}
          <Grid container justifyContent="flex-start">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
                  wordWrap: "break-word",
                  lineHeight: 1.4,
                  color: texts[currentIndex].color,
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  opacity: 1,
                  transform: "translateY(0px)",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.25rem", lg: "2.5rem" },
                  textAlign: { xs: "center", sm: "left" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                {texts[currentIndex].label}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                wordWrap: "break-word",
                lineHeight: 1.6,
                color: "#343434",
                mt: 2,
                // fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem", lg: "1.1rem" },
                textAlign: { xs: "center", sm: "left" },
                mx: { xs: "auto", sm: 0 },
              }}
            >
              We partner with IT and software companies to simplify employee commutes. From office to home and home to office, we ensure every ride is safe, reliable, and on time. With GPS tracking, verified drivers, and 24/7 support, your teams travel with complete peace of mind.
            </Typography>
          </Grid>
        </Grid>

        <ContactUs />
      </Grid>


 <PopupDialog/>


      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            position: "relative",
            // width: "100%",
            backgroundImage: `url(${rectange})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // or "cover" if you want to stretch
            backgroundPosition: "center top",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 4, sm: 6, md: 8 },
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
              wordWrap: "break-word",
              lineHeight: 1.5,
              mt: 5
            }}
          >
            Why Choose SJS Safe Travels
          </Typography>

          {/* Body Text */}
          <Typography
            variant="body1"
            sx={{
              color: "#343434",
              mb: 3,
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.05rem",
                lg: "1.1rem",
                xl: "1.15rem",
              },
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: "900px",
              mt: 3
            }}
          >
            At SJS Travels, we go beyond just rides — we deliver safe, reliable, and
            hassle-free transportation solutions designed especially for IT and
            software professionals. With verified drivers, GPS-enabled tracking, and
            24/7 support, we ensure your employees commute with complete peace of
            mind. Our modern, well-maintained fleet offers comfort and punctuality,
            while our tech-enabled operations make scheduling and monitoring seamless
            for companies.
          </Typography>

          {/* Contact Button */}
          <Box sx={{ mb: 5 }}>
            <ContactUs />
          </Box>

          {/* Subtext */}
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#515151", mb: 4, lineHeight: 1.5 }}
          >
            Trusted by Partners Nationwide
          </Typography>

          {/* Marquee / Scrolling Partners */}
          <Grid
            container
            sx={{
              overflow: "hidden",
              py: 1,
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                whiteSpace: "nowrap",
                animation: "scrollLeft 20s linear infinite",
                gap: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
              }}
            >
              {[
                "Keramruth",
                "Myskool",
                "Pharma Distributors",
                "Meta",
                "Wash & Ware",
                "Abhilash Logistics",
              ].map((item, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="body1"
                  sx={{
                    color: "#898989",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      md: "1rem",
                      lg: "1.1rem",
                      xl: "1.15rem",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          </Grid>

          <style>
            {`
        @keyframes scrollLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}
          </style>
        </Box>
      </Grid>



      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${WhyChooseUs})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: { xs: 3, sm: 5, md: 5}, // responsive padding
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
              wordWrap: "break-word",
              lineHeight: 1.5,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2.25rem" },
              mb: 3,
            }}
          >
            Why Choose Us
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "980px" },
              wordWrap: "break-word",
              lineHeight: 1.5,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.05rem" },
              mb: 5,
            }}
          >
            We provide safe, comfortable, and punctual transportation for IT
            professionals. Partnering with companies, we ensure your team gets from
            office to home—and back—without hassle. With real-time tracking,
            professional drivers, and flexible scheduling, we make daily commutes
            stress-free.
          </Typography>

          {/* Cards Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // stack on mobile
              flexWrap: "wrap",
              gap: { xs: 3, sm: 2, md: 3 },
              width: "100%",
            }}
          >
            {[cardImage1, cardImage2, cardImage3, cardImage4].map((img, index) => {
              const titles = [
                "Door-to-Door Pickup",
                "Flexible Timings",
                "Professional Drivers",
                "Corporate Partnerships",
              ];
              const bodies = [
                "No more walking long distances—your ride comes to you",
                "Tailored schedules to match your office shifts.",
                "Trained, verified, and courteous drivers",
                "No more walking long distances—your ride comes to you",
              ];
              const bgColors = ["#F3F2F9", "#F2F9F4", "#EFF5FF", "#F9F2F2"];

              return (
                <Card
                  key={index}
                  sx={{
                    bgcolor: bgColors[index],
                    borderRadius: 2,
                    boxShadow: "none",
                    flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 220px" },
                    maxWidth: { xs: "100%", sm: "45%", md: 230 },
                    p: 2,
                    mb: { xs: 3, sm: 0 },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={titles[index]}
                    sx={{ width: "100%", height: "auto", borderRadius: "16px", mt: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1.1rem", md: "1rem" } }}>
                      {titles[index]}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" } }}>
                      {bodies[index]}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Grid>





      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // stack on mobile
          borderRadius: "20px",
          backgroundColor: "#F3F2F9",
          boxShadow: "none",
          maxWidth: { xs: "95%", sm: 1100 },
          mx: "auto",
          p: 0,
          overflow: "hidden",
        }}
      >
        {/* Left Section (Text) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            p: { xs: 2, sm: 3 },
            justifyContent: "center",
            textAlign: { xs: "center", sm: "left" }, // center text on mobile
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
            >
              Home To Work
            </Typography>
            <Typography
              variant="body2"
              sx={{
                height: "100px",
                width: "480px",
                border: "1px solid #C6C6C6",
                borderRadius: "6px",
                p: 1.5,
                mt: 2,
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              }}
            >
              At SJS Travels, we make everyday commutes seamless for IT and software employees. With on-time pickups, verified drivers, and GPS-enabled rides, your journey is always safe and reliable.
            </Typography>
          </CardContent>
        </Box>

        {/* Right Section (Image) */}
        <CardMedia
          component="img"
          image={skodaImage}
          alt="Skoda Car"
          sx={{
            width: { xs: "100%", sm: "300px" }, // full width on mobile
            height: { xs: "auto", sm: "100%" },
            objectFit: "cover",
            borderRadius: { xs: "20px 20px 20px 20px", sm: "20px 20px 20px 20px" }, // rounded corners
            flexShrink: 0,
            mt: { xs: 2, sm: 0 }, // spacing on stacked layout
          }}
        />
      </Card>



  <Box
  sx={{
  position: "relative", 
  backgroundImage: `url(${Vector})`,
  backgroundRepeat: "no-repeat",    
  backgroundPosition: "top right",
  p: { xs: 3, sm: 5, md: 10 },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
   backgroundSize: "40% auto", 
  
}}


>
  {/* Content with zIndex above background */}
  <Box sx={{ position: "relative", zIndex: 1 ,mt:4}}>
    {/* Title */}
    <Typography
      variant="h4"
      sx={{
        fontWeight: 600,
        mb: 2,
        lineHeight: 1.3,
        maxWidth: { xs: "100%", md: "600px" }, 
        fontSize: { xs: "1.5rem", md: "2rem" },
      }}
    >
      Don’t take our word for it, see what our client say
    </Typography>

    {/* Paragraph */}
    <Typography
     variant="body2"
      sx={{
        lineHeight: 1.6,
        mb: 9,
        maxWidth: { xs: "100%", md: "850px" }, 

      }}
    >
      At&nbsp;
      <Box component="span" sx={{ fontWeight: 600 }}>
        SJS Travels
      </Box>
      , client satisfaction drives everything we do. From IT companies to
      growing startups, businesses trust us to deliver safe, reliable, and
      seamless commutes for their employees every day.
    </Typography>

    {/* Testimonial Boxes */}
    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: { xs: "wrap", md: "nowrap" }, // ✅ stack on mobile
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {/* First Box */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 500px" }, // ✅ full width on mobile
          backgroundColor: "#F3F2F9",
          borderRadius: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography  variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
          SJS Travels has transformed the way our employees commute. Their
          punctuality and professionalism make daily office travel stress-free.
          Truly a reliable partner!
        </Typography>

        <Stack direction="row" spacing={0.5} mb={1}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              icon="material-symbols-light:star"
              width={24}
              height={24}
              style={{ color: "#FFD209" }}
            />
          ))}
        </Stack>

        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          TechCorp Solutions
        </Typography>
      </Box>

      {/* Second Box */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 500px" }, 
          backgroundColor: "#EFF5FF",
          borderRadius: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
          The GPS tracking and verified drivers give us complete peace of mind.
          Our employees feel safer and more comfortable than ever.
        </Typography>

        <Stack direction="row" spacing={0.5} mb={1}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              icon="material-symbols-light:star"
              width={24}
              height={24}
              style={{ color: "#FFD209" }}
            />
          ))}
        </Stack>

        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Innovatech Pvt. Ltd.
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>


   <Box
  sx={{
    width: "100%",           // full width on small screens
    maxWidth: "1050px",       // max width on larger screens
    height: "auto",
    borderRadius: "20px",
    backgroundColor: "#EFF5FF",
    display: "flex",
    flexDirection: "column",
    gap: 2,                
    p: { xs: 4, sm: 6, md: 5 }, 
    mt: 5,                 
    mx: "auto",            
    alignItems: "center",    
    textAlign: "center", 
    alignContent:'center'
     
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 600,
      lineHeight: 1.3,
      mb: 1,                 // small margin below heading
    }}
  >
    We’re Here to Help You Commute Smarter
  </Typography>

  <Typography
    variant="body2"
    sx={{
      lineHeight: 1.6,
      maxWidth: { xs: "100%", sm: "80%", md: "80%" }, // limit width on larger screens
    }}
  >
    Tell us your requirements and our team will get back to you with the perfect commute plan.
  </Typography>

  <Box sx={{ mt: 3}}>
    <ContactUs />
  </Box>
</Box>

<Footer/>

    </>

  );
}

export default HomePage;












