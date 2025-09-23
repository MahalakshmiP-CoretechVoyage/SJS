import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContactUs from "../pages/ContactUs";
import popupImage from "../assets/popupImage.png";
import rectange from "../assets/Rectangle .png"
import popup1 from "../assets/popup1.png"
import popup2 from "../assets/popup2.png"
import popup3 from "../assets/popup3.png"
import popup4 from "../assets/popup4.png"
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



function HomePage1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePopups, setVisiblePopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
  });
  const popupSectionRef = useRef(null);
  const [popupSectionVisible, setPopupSectionVisible] = useState(false);


  const [popup1Text, setPopup1Text] = useState("");
const fullPopup1Text = "I feel safer knowing it’s GPS tracked ";
const [popup2Text, setPopup2Text] = useState("");
const fullPopup2Text = "Yes! Your ride arrives in 5 mins ";
 const [popup3Text, setPopup3Text] = useState("");
const fullPopup3Text = "Is my cab on time today?";
 const [popup4Text, setPopup4Text] = useState("");
const fullPopup4Text = "Every day pickup and drop is smooth!";

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
  if (visiblePopups.popup1) {
    let i = 0;
    const interval = setInterval(() => {
      setPopup1Text(fullPopup1Text.slice(0, i + 1));
      i++;
      if (i === fullPopup1Text.length) clearInterval(interval);
    }, 100); // typing speed in ms
    return () => clearInterval(interval);
  }
}, [visiblePopups.popup1]);


useEffect(() => {
  if (visiblePopups.popup2) {
    let i = 0;
    const interval = setInterval(() => {
      setPopup2Text(fullPopup2Text.slice(0, i + 1));
      i++;
      if (i === fullPopup2Text.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }
}, [visiblePopups.popup2]);


useEffect(() => {
  if (visiblePopups.popup3) {
    let i = 0;
    const interval = setInterval(() => {
      setPopup3Text(fullPopup3Text.slice(0, i + 1));
      i++;
      if (i === fullPopup3Text.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }
}, [visiblePopups.popup3]);


useEffect(() => {
  if (visiblePopups.popup4) {
    let i = 0;
    const interval = setInterval(() => {
      setPopup4Text(fullPopup4Text.slice(0, i + 1));
      i++;
      if (i === fullPopup4Text.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }
}, [visiblePopups.popup4]);


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
      <Grid container sx={{ p: 10 }}>

        <Grid container justifyContent="flex-start">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "730px" },
                wordWrap: "break-word",
                lineHeight: 1.5,
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
                  lineHeight: 1.5,
                  color: texts[currentIndex].color,
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  opacity: 1,
                  transform: "translateY(0px)",
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
                lineHeight: 1.5,
                color: "#343434",
                mt: 2
              }}
            >
              We partner with IT and software companies to simplify employee commutes. From office to home and home to office, we ensure every ride is safe, reliable, and on time.With GPS tracking, verified drivers, and 24/7 support, your teams travel with complete peace of mind.
            </Typography>
          </Grid>


        </Grid>

        <ContactUs />
      </Grid>


      <Grid container  ref={popupSectionRef}>
        <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
          {/* Main Image */}
          <Box
            component="img"
            src={popupImage}
            alt="Popup"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 2,
              display: "block",
            }}
          />

          {/* Overlay 1 */}
          {visiblePopups.popup1 && (
  <Box
    sx={{
      position: "absolute",
      top: "57%",
      left: "2%",
      transform: "translateY(-50%)",
      width: 201,
      height: 96.83496,
      backgroundImage: `url(${popup1})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      p: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          mb: 5,
          color: "#000",
          transition: "opacity 0.3s ease",
        }}
      >
        {popup1Text}
        {popup1Text.length === fullPopup1Text.length && (
          <Icon
            icon="tdesign:location-filled"
            width={16.47}
            height={17}
            style={{ color: "red" }}
          />
        )}
      </Typography>
    </Grid>
  </Box>
)}



  {/* Overlay 2 */}
{visiblePopups.popup2 && (
  <Box
    sx={{
      position: "absolute",
      top: "77%",
      left: "68%",
      transform: "translate(-50%, -50%)",
      backgroundImage: `url(${popup2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "250px",
      height: "65.5px",
      p: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Grid item xs={12} sm={10} md={8} lg={10} xl={5}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          ml: 2,
          mb: 2,
          transition: "opacity 0.3s ease",
        }}
      >
        {popup2Text}
        {popup2Text.length === fullPopup2Text.length && (
          <Icon
            icon="streamline-ultimate-color:car-4"
            width={16}
            height={17}

          />
        )}
      </Typography>
    </Grid>
  </Box>
)}



          {/* Overlay 3 */}
        {visiblePopups.popup3 && (
  <Box
    sx={{
      position: "absolute",
      top: "22%",
      left: "68%",
      transform: "translate(-60%, -50%)",
      backgroundImage: `url(${popup3})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "250px",
      height: "65.5px",
      p: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Grid item xs={12} sm={10} md={8} lg={10} xl={5}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          ml: 2,
          mb: 2,
          transition: "opacity 0.3s ease",
        }}
      >
        {popup3Text}
      </Typography>
    </Grid>
  </Box>
)}



          {/* Overlay 4 */}
        {visiblePopups.popup4 && (
  <Box
    sx={{
      position: "absolute",
      top: "55%",
      left: "93%",
      transform: "translate(-69%, -50%)",
      backgroundImage: `url(${popup4})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "201px",
      height: "96.83px",
      p: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Grid item xs={12} sm={10} md={8} lg={10} xl={5}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          mb: 5,
          transition: "opacity 0.3s ease",
        }}
      >
        {popup4Text}
      </Typography>
    </Grid>
  </Box>
)}

        </Grid>
      </Grid>





<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
  <Box sx={{ position: "relative"}}>
    {/* Image */}
    <Box
      component="img"
      src={rectange}
      alt="Popup"
      sx={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
      }}
    />

    {/* Title Text */}
    <Box
      sx={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
    >
      <Typography variant="h4" align="center">
        Why Choose SJS Safe Travels
      </Typography>
    </Box>

    {/* Body Text */}
    <Box
      sx={{
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: { xs: "90%", sm: "80%", md: "70%", lg: "80%", xl: "50%" },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#343434",
          mt: 2,
          lineHeight: 1.5,
        }}
      >
        At SJS Travels, we go beyond just rides — we deliver safe, reliable, and hassle-free transportation solutions designed especially for IT and software professionals. With verified drivers, GPS-enabled tracking, and 24/7 support, we ensure your employees commute with complete peace of mind. Our modern, well-maintained fleet offers comfort and punctuality, while our tech-enabled operations make scheduling and monitoring seamless for companies
      </Typography>

      <Box sx={{ mt: 3, ml: "42%" }}>
        <ContactUs />
      </Box>

      <Typography
     variant="body1" 
        sx={{
          color: "#515151",
          mt: 7,
          lineHeight: 1.5,
        }}
      >
        Trusted by Partners Nationwide
      </Typography>
    </Box>

    {/* Marquee / Scrolling Partners */}
    <Grid
  container
  sx={{
    position: "absolute",
    bottom: "28%", // adjust this to place inside the image
    left: 0,
    width: "100%",
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
      gap: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }, // spacing between items
    }}
  >
    {["Keramruth", "Myskool", "Pharma Distributors", "Meta", "Wash & Ware", "Abhilash Logistics"].map(
      (item, index) => (
        <Typography
          key={index}
          component="span"
          variant="body1"
          sx={{
            color: "#898989",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem", xl: "1.15rem" },
          }}
        >
          {item}
        </Typography>
      )
    )}
  </Grid>

  <style>
    {`
      @keyframes scrollLeft {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</Grid>

  </Box>
</Grid>







<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
    <Box sx={{ position: "relative" }}>
    {/* Image */}
    <Box
      sx={{
    width: "100%",                   
   height:'auto',            
    backgroundImage: `url("../assets/Rectangle .png")`, 
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",                  
                              
  }}
    >
        {/* Title Text */}
    <Box
      sx={{
        position: "absolute",
        top: "5%",
        left: "6%",
        width: "100%",
      }}
    >
     
    <Grid >
            <Typography
              variant="h4"
              sx={{
                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
                wordWrap: "break-word",
                lineHeight: 1.5,
              }}
            >
             Why Choose Us
            </Typography>
          </Grid>










<Grid item xs={12}>
  <Typography
    variant="body1"
    sx={{
      width: "100%",          // always full width of parent Grid
      wordWrap: "break-word", // break long words if needed
      lineHeight: 1.6,
      color: "#343434",
      mt: 2,
      // textAlign: "center",    // optional → center text for all screens
      // px: { xs: 2, sm: 4, md: 6 },
    }}
  >
    We provide safe, comfortable, and punctual transportation for IT professionals. Partnering with companies, we ensure your team gets from office to home—and back—without hassle. With real-time tracking, professional drivers, and flexible scheduling, we make daily commutes stress-free.
  </Typography>
</Grid>






<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
  {/* Card 1 */}
  <Card
    sx={{
      bgcolor: "#F3F2F9",
      borderRadius: 2,
      boxShadow: "none",
      mt: 5,
      flex: "1 1 250px", // responsive card width
      maxWidth: 280,     // limit max size
    }}
  >
    <CardMedia
      component="img"
      image={cardImage1}
      alt="img"
      sx={{
        width: "100%",       // responsive
        height: "auto",      // keep aspect ratio
        objectFit: "contain",
        borderRadius: "16px",
        mx: "auto",
        mt: 2,
        maxHeight: 220,      // optional, avoid too tall
      }}
    />

    <CardContent>
      <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Door-to-Door Pickup
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#343434", ml: 2 }}>
            No more walking long distances—your ride comes to you
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
    {/* Card 2 */}
  <Card
    sx={{
      bgcolor: "#F2F9F4",
      borderRadius: 2,
      boxShadow: "none",
      mt: 5,
      flex: "1 1 250px", // responsive card width
      maxWidth: 280,     // limit max size
    }}
  >
    <CardMedia
      component="img"
      image={cardImage2}
      alt="img"
      sx={{
        width: "100%",       // responsive
        height: "auto",      // keep aspect ratio
        objectFit: "contain",
        borderRadius: "16px",
        mx: "auto",
        mt: 2,
        maxHeight: 220,      // optional, avoid too tall
      }}
    />

    <CardContent>
      <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Door-to-Door Pickup
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#343434", ml: 2 }}>
            No more walking long distances—your ride comes to you
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
      {/* Card 3 */}
  <Card
    sx={{
      bgcolor: "#EFF5FF",
      borderRadius: 2,
      boxShadow: "none",
      mt: 5,
      flex: "1 1 250px", // responsive card width
      maxWidth: 280,     // limit max size
    }}
  >
    <CardMedia
      component="img"
      image={cardImage3}
      alt="img"
      sx={{
        width: "100%",       // responsive
        height: "auto",      // keep aspect ratio
        objectFit: "contain",
        borderRadius: "16px",
        mx: "auto",
        mt: 2,
        maxHeight: 220,      // optional, avoid too tall
      }}
    />

    <CardContent>
      <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Door-to-Door Pickup
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#343434", ml: 2 }}>
            No more walking long distances—your ride comes to you
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
        {/* Card 4 */}
  <Card
    sx={{
      bgcolor: "#F9F2F2",
      borderRadius: 2,
      boxShadow: "none",
      mt: 5,
      flex: "1 1 250px", // responsive card width
      maxWidth: 280,     // limit max size
    }}
  >
    <CardMedia
      component="img"
      image={cardImage4}
      alt="img"
      sx={{
        width: "100%",       // responsive
        height: "auto",      // keep aspect ratio
        objectFit: "contain",
        borderRadius: "16px",
        mx: "auto",
        mt: 2,
        maxHeight: 220,      // optional, avoid too tall
      }}
    />

    <CardContent>
      <Grid container direction="column" spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Door-to-Door Pickup
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#343434", ml: 2 }}>
            No more walking long distances—your ride comes to you
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>

 
</Box>




</Box>
    </Box>



</Box>
</Grid>

</>

  );
}

export default HomePage1;












