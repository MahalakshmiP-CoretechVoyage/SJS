import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import aboutUs from "../assets/AboutUs.png";
import Footer from '../Footer/Footer';
import TourPopupDialog from '../popupDialog/TourPopupDialog';

function AboutUs() {
    return (
        <>
            {/* Title */}
            <Box
                sx={{
                    mb: 4,
                    p: 7
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "800px" },
                        lineHeight: 1.5,
                    }}
                >
                    Redefining Everyday Travel with Safety, Comfort, and Reliability
                </Typography>
            </Box>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box
                    sx={{
                        position: "relative",
                        minHeight: "600px",
                        display: "flex",
                        flexDirection: "column",
                        p: 7,
                        top: "-130px",
                        overflow: "hidden", // ensures overlay stays inside
                    }}
                >
                    {/* Background Image with Opacity */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${aboutUs})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center top",
                            opacity: 0.4, // set desired opacity here
                            zIndex: 0,
                        }}
                    />

                    {/* Content on top */}
                    <Box sx={{ position: "relative", zIndex: 1, color: "#000" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" },
                                wordWrap: "break-word",
                                lineHeight: 1.5,
                            }}
                        >
                            {/* Optional Heading */}
                        </Typography>
                        <Typography variant='body1' sx={{ maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "500px" }, lineHeight: 1.5 }}>
                            Driven by safety, reliability, and trust — we make every journey stress-free
                        </Typography>
                        <Typography variant='body2' sx={{ maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" }, lineHeight: 1.5, mt: 3 }}>
                            At SJS Travels, we believe travel should be more than just moving from one place to another — it should be safe, comfortable, and worry-free. With years of experience in corporate commuting and tour services, we’ve built a reputation as a trusted travel partner for businesses and families alike.
                        </Typography>
                        {/* Add remaining text similarly */}
                        <Typography variant='body2'
                            sx={{
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                                lineHeight: 1.5,
                                mt: 3

                            }}>We specialize in providing daily office commute solutions, outstation travel, and customized tour packages designed to meet every need. Backed by a modern fleet of vehicles and a team of professional drivers, our focus is always on safety, punctuality, and customer satisfaction.</Typography>
                        <Typography variant='body2'
                            sx={{
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                                lineHeight: 1.5,
                                mt: 3

                            }}>We specialize in providing daily office commute solutions, outstation travel, and customized tour packages designed to meet every need. Backed by a modern fleet of vehicles and a team of professional drivers, our focus is always on safety, punctuality, and customer satisfaction.</Typography>

                        <Typography variant='body2'
                            sx={{
                                maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                                lineHeight: 1.5,
                                mt: 3

                            }}>Why choose us? Because we go beyond transport — we deliver peace of mind. From GPS-enabled rides and verified drivers to clean, well-maintained vehicles, we ensure every journey is smooth and reliableWhy choose us? Because we go beyond transport — we deliver peace of mind. From GPS-enabled rides and verified drivers to clean, well-maintained vehicles, we ensure every journey is smooth and reliable</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: '-175px', width: '100%' }}>
                    <TourPopupDialog />
                </Box>

                <Box sx={{ mt: '-80px', width: '100%' }}>
                    <Footer />
                </Box>
            </Grid>
        </>
    );
}

export default AboutUs;
