// import React from 'react'
// import { Box, Typography, Grid, CardContent, Card, CardMedia } from '@mui/material'
// import tours from "../assets/Tours.png"
// import rectange1 from "../assets/Rectangle1.png"
// import CorporateCard1 from "../assets/CorporateCard1.png"
// import CorporateCard2 from "../assets/CorporateCard2.png"
// import CorporateCard3 from "../assets/CorporateCard3.png"
// import CorporateCard4 from "../assets/CorporateCard4.png"
// import CorporateCard5 from "../assets/CorporateCard5.png"
// import CorporateCard6 from "../assets/CorporateCard6.png"
// import corporateRental from "../assets/corporateRental.png"

// import ContactUs from '../pages/ContactUs'
// import PopupDialog from '../popupDialog/popupDialog'
// import Footer from '../Footer/Footer'

// function CorporateRental() {
//      const cards = [
//     {
//       img: CorporateCard1,
//       title: "Daily Office Commute Package",
//       body: "Safe and reliable home-to-office rides with verified drivers and GPS tracking.",
//     },
//     {
//       img: CorporateCard2,
//       title: "City Shuttle Package",
//       body: "Shared city rides for employees, cost-effective and eco-friendly.",
//     },
//     {
//       img: CorporateCard3,
//       title: "Outstation Corporate Travel Package",
//       body: "Comfortable long-distance trips with professional drivers and 24/7 support",
//     },
//     {
//       img: CorporateCard4,
//       title: "Corporate Tie-Up Package",
//       body: "Custom fleet solutions for companies with flexible routes and schedules.",
//     },
//     {
//       img: CorporateCard5,
//       title: "On-Demand Ride Package",
//       body: "Instant bookings for employees with irregular shifts or urgent needs",
//     },
//     {
//       img: CorporateCard6,
//       title: "Green Commute Package",
//       body: "Eco-friendly electric and hybrid vehicles for sustainable employee travel",
//     },
//   ];
//     return (
//         <>
// <Box
//   sx={{
//     position: "relative",
//     width: "100%",
//     backgroundImage: `url(${corporateRental})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "top right",
//     backgroundSize: "cover", // full width
//     pt: { xs: 10, sm: 12, md: 15 }, // padding top controls visual height
//     pb: { xs: 5, sm: 6, md: 8 },
//     px: { xs: 3, sm: 5, md: 10 },
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   }}
// >
//   <Typography
//     variant="h4"
//     sx={{
//       maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "740px" },
//       wordWrap: "break-word",
//       lineHeight: 1.4,
//       fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2.25rem" },
//       textAlign: "center",
//       mb: 2,
//     }}
//   >
//     Corporate Travel Packages Designed for Every Need
//   </Typography>

//   <Typography
//     variant="body1"
//     sx={{
//       width: "100%",
//       maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "550px" },
//       wordWrap: "break-word",
//       lineHeight: 1.6,
//       color: "#343434",
//       mb: 4,
//       textAlign: "center",
//     }}
//   >
//     From daily office commutes to long-distance business trips,{' '}
//     <Box component="span" sx={{ fontWeight: 600 }}>
//       SJS Travels
//     </Box>{' '}
//     offers flexible packages tailored for IT companies and their employees. Choose the plan that fits your team, with safety, comfort, and punctuality built in.
//   </Typography>

//   <ContactUs />

//   {/* Rectangle1 Section */}
//   <Box
//     sx={{
//       mt: 6,
//       width: "100%",
//       maxWidth: "1200px", // optional max width
//       backgroundImage: `url(${rectange1})`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       backgroundPosition: "center top",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       px: { xs: 2, sm: 3, md: 15 },
//       py: { xs: 4, sm: 6, md: 10 },
//     }}
//   >
//     {/* Rectangle1 content like cards goes here */}
//   </Box>
// </Box>



//     <Card
//   sx={{
//     display: "flex",
//     flexDirection: "column", // stack text vertically
//     borderRadius: "20px",
//     backgroundColor: "#F3F2F9",
//     boxShadow: "none",
//     maxWidth: { xs: "95%", sm: 1100 },
//     mx: "auto",
//     p: 3,
//     overflow: "hidden",
//     justifyContent: "center", // vertical centering
//     alignItems: "center",     // horizontal centering
//     textAlign: "center",      
//     mt:7
//   }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Typography
//       variant="h4"
//       sx={{
//         maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
//         lineHeight: 1.5,
//         mb: 2,
//       }}
//     >
//      Driven by Service, Powered by Trust
//     </Typography>

//     <Typography
//       variant="body1"
//       sx={{
//         color: "#343434",
//         fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
//         lineHeight: 1.5,
//         maxWidth: "720px",
//       }}
//     >
//     We ensure every ride is safe, comfortable, and on time — with trusted drivers and well-maintained vehicles dedicated to your peace of mind.
//     </Typography>
//   </Box>
//   <ContactUs/>
// </Card>

//     <PopupDialog/>
//     <Footer/>
//         </>

//     )
// }

// export default CorporateRental



















//23/9/2025
import React from 'react'
import { Box, Typography, Grid, CardContent, Card, CardMedia } from '@mui/material'
import tours from "../assets/Tours.png"
import rectange1 from "../assets/Rectangle1.png"
import CorporateCard1 from "../assets/CorporateCard1.png"
import CorporateCard2 from "../assets/CorporateCard2.png"
import CorporateCard3 from "../assets/CorporateCard3.png"
import CorporateCard4 from "../assets/CorporateCard4.png"
import CorporateCard5 from "../assets/CorporateCard5.png"
import CorporateCard6 from "../assets/CorporateCard6.png"
import corporateRental from "../assets/corporateRental.png"

import ContactUs from '../pages/ContactUs'
import PopupDialog from '../popupDialog/popupDialog'
import Footer from '../Footer/Footer'

function CorporateRental() {
     const cards = [
    {
      img: CorporateCard1,
      title: "Daily Office Commute Package",
      body: "Safe and reliable home-to-office rides with verified drivers and GPS tracking.",
    },
    {
      img: CorporateCard2,
      title: "City Shuttle Package",
      body: "Shared city rides for employees, cost-effective and eco-friendly.",
    },
    {
      img: CorporateCard3,
      title: "Outstation Corporate Travel Package",
      body: "Comfortable long-distance trips with professional drivers and 24/7 support",
    },
    {
      img: CorporateCard4,
      title: "Corporate Tie-Up Package",
      body: "Custom fleet solutions for companies with flexible routes and schedules.",
    },
    {
      img: CorporateCard5,
      title: "On-Demand Ride Package",
      body: "Instant bookings for employees with irregular shifts or urgent needs",
    },
    {
      img: CorporateCard6,
      title: "Green Commute Package",
      body: "Eco-friendly electric and hybrid vehicles for sustainable employee travel",
    },
  ];
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: {
                      sm:`url(${corporateRental})`,
                       xs: "none",
                    },
                    backgroundRepeat: "no-repeat",
                     backgroundPosition: "top right",
                     top:"150px",
                    backgroundSize: "contain",
                    height: { xs: "400px", sm: "500px", md: "300px" },
                    p: {sm: 5, md:10},
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    
                   
                }}
            >
                <Grid container justifyContent="flex-start">
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            sx={{
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "740px" },
                                wordWrap: "break-word",
                                lineHeight: 1.2,
                                mx: { xs: "auto", sm: 0 }, 
                                mt:"-170px",
                                p:0

                            }}
                        >
                           Corporate Travel Packages Designed for Every Need
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="body1"
                            sx={{
                                // width: "100%",
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "550px" },
                                wordWrap: "break-word",
                                lineHeight: 1.2,
                                color: "#343434",
                                mx: { xs: "auto", sm: 0 },
                                 mt:{sm:"-50px"}
                            }}
                        >
                             From daily office commutes to long-distance business trips,{' '}
                            <Box component="span" sx={{ fontWeight: 600 }}>
                                SJS Travels
                            </Box>{' '}
                         offers flexible packages tailored for IT companies and their employees. Choose the plan that fits your team, with safety, comfort, and punctuality built in
                        </Typography>
                        <ContactUs/>

                    </Grid>

                </Grid>

            </Box>
            

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box
                    sx={{
                        position: "relative",
                        // width: "100%",
                        backgroundImage: `url(${rectange1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover", // or "cover" if you want to stretch
                        backgroundPosition: "center top",
                        minHeight: "600px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        px: { sm: 3, md: 15 },
                        py: { xs: 10, sm: 6, md: 20 },
                       top:{xs:'-70px'}
                       
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
                            wordWrap: "break-word",
                            lineHeight: 1.5,
                          
                        }}
                    >

                    </Typography>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                            wordWrap: "break-word",
                            lineHeight: 1.5,
                           
                        }}
                    >
                        Pick the Package That Moves You
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
                            maxWidth: "850px",
                            mt: 2
                        }}
                    >
                       From daily office rides to long-distance corporate travel,{' '}
                       <Box component="span" sx={{ fontWeight: 600 }}>
                                SJS Travels
                            </Box>{' '}
                        offers tailored packages that suit your company’s needs. Safe, reliable, and tech-enabled — our solutions ensure employees travel with comfort and peace of mind.
                    </Typography>




                  <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 3, sm: 3, md: 3 },
        justifyContent: "center",
        width: "100%",
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: "none",
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 35%" },
            maxWidth: { xs: "100%", sm: "45%", md: "25%" },
            mb: { xs: 3, sm: 3 },
            padding: 2,
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <CardMedia
            component="img"
            image={card.img}
            alt={card.title}
            sx={{
              width: "100%",
              height: 200, // uniform height for all images
              objectFit: "contain", // keeps image aspect ratio and fills the container
              borderRadius: "16px",
              mb: 2,
              
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                mb: 1,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
              }}
            >
              {card.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>

                    <ContactUs />
                </Box>
            </Grid>

    <Card
  sx={{
    display: "flex",
    flexDirection: "column", // stack text vertically
    borderRadius: "20px",
    backgroundColor: "#F3F2F9",
    boxShadow: "none",
    maxWidth: { xs: "95%", sm: 1100 },
    mx: "auto",
    p: 3,
    overflow: "hidden",
    justifyContent: "center", // vertical centering
    alignItems: "center",     // horizontal centering
    textAlign: "center",      
    mt:7
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
        lineHeight: 1.5,
        mb: 2,
      }}
    >
     Driven by Service, Powered by Trust
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: "#343434",
        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
        lineHeight: 1.5,
        maxWidth: "720px",
      }}
    >
    We ensure every ride is safe, comfortable, and on time — with trusted drivers and well-maintained vehicles dedicated to your peace of mind.
    </Typography>
  </Box>
  <ContactUs/>
</Card>

    <PopupDialog/>
   <Box sx={{ mt: '-80px', width: '100%' }}>
  <Footer />
</Box>

        </>

    )
}

export default CorporateRental


















