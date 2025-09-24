import React from 'react'
import { Box, Typography, Grid, CardContent, Card, CardMedia } from '@mui/material'
import tours from "../assets/Tours.png"
import rectange1 from "../assets/Rectangle1.png"
import ToursCard1 from "../assets/ToursCard1.png"
import ToursCard2 from "../assets/ToursCard2.png"
import ToursCard3 from "../assets/ToursCard3.png"
import ToursCard4 from "../assets/ToursCard4.png"
import ContactUs from '../pages/ContactUs'
import Footer from '../Footer/Footer'
import TourPopupDialog from '../popupDialog/TourPopupDialog'

function Tours() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
          p: { sm: 5, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
           backgroundImage: {
            xs: "none",
            sm: `url(${tours})`,
          },
        }}
      >
        <Grid container justifyContent="flex-start">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                maxWidth: {  md: "600px", lg: "740px" },
                wordWrap: "break-word",
                lineHeight: 1.2,
                mx: { xs: "auto", sm: 0 }, 
              }}
            >
              Explore. Experience. Enjoy Memorable Tours with SJS Travels
            </Typography>
          </Grid>



          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "550px" },
                wordWrap: "break-word",
                lineHeight: 1.6,
                color: "#343434",
                mt: 2,
                mx: { xs: "auto", sm: 0 },
              }}
            >
              From weekend getaways to long vacations,{' '}
              <Box component="span" sx={{ fontWeight: 600 }}>
                SJS Travels
              </Box>{' '}
              makes every trip safe, comfortable, and hassle-free. Choose from curated tour packages or customize your own adventure
            </Typography>

          </Grid>
        </Grid>

      </Box>







      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${rectange1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // or "cover" if you want to stretch
            backgroundPosition: "center top",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 15 },
            py: { xs: 4, sm: 6, md: 20 },
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
            Discover More with SJS Tour Packages
          </Typography>

          {/* Body Text */}
          <Typography
            variant="body1"
            sx={{
              color: "#343434",
              mb: 3,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: "850px",
              mt: 3
            }}
          >
            Not just office rides — we make your holidays and getaways smoother with our specially designed tour packages. Travel in comfort, explore with ease, and create memories that last
          </Typography>



          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: { xs: 3, sm: 2, md: 3 },
              width: "100%",
            }}
          >
            {[ToursCard1, ToursCard2, ToursCard3, ToursCard4].map((img, index) => {
              const titles = [
                "Weekend Getaways",
                "City Sightseeing",
                "Outstation Tours",
                "Custom Tour Plans",
              ];
              const bodies = [
                "Perfect for short family trips or friends’ outings — safe and comfortable rides to nearby destinations",
                "Explore the city’s landmarks, attractions, and hidden gems with professional drivers who know every route",
                "From hill stations to heritage towns, our outstation packages ensure you travel worry-free.",
                "Tailor your own package with flexible timings, routes, and vehicles to suit your trip",
              ];

              return (
                <Card
                  key={index}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    boxShadow: "none",
                    flex: { xs: "1 1 100%", sm: "1 1 45%" },
                    maxWidth: { xs: "100%", sm: "45%" },
                    mb: { xs: 3, sm: 2 },
                    padding: 2,
                    display: "flex",
                    flexDirection: "column", // makes text + image stack
                    height: "100%", // ensures equal height
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={titles[index]}
                    sx={{
                      width: "100%",
                      height: 200, // 🔹 fixed height for all images
                      objectFit: "contain", // crops consistently
                      borderRadius: "16px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mt: 2,
                       
                      }}
                    >
                      {titles[index]}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                       
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {bodies[index]}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
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
          mt: 7,
          height: "60vh"

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
              lineHeight: {
                sm:1.5,
              },
              mb: 2,
            }}
          >
            Driven by Service, Powered by Trust
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#343434",
              lineHeight: 1.5,
              maxWidth: "850px",
            }}
          >
            We ensure every ride is safe, comfortable, and on time — with trusted drivers and well-maintained vehicles dedicated to your peace of mind.
          </Typography>
        </Box>
        <ContactUs />
      </Card>
      <Box sx={{ mt: '-70px', width: '100%' }}>
        <TourPopupDialog />
      </Box>

      <Box sx={{ mt: '-290px', width: '100%' }}>
        <Footer />
      </Box>

    </>

  )
}

export default Tours
