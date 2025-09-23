import React from "react";
import { Typography, Card, CardMedia, CardContent, Box } from "@mui/material";
import Toyota from "../assets/Toyota.png";
import Swift from "../assets/Swift.png";
import Indica from "../assets/Indica.png";
import ertiga from "../assets/ertiga.png";
import ContactUs from "../pages/ContactUs";
import Footer from "../Footer/Footer";

function Vehicles() {
    const cars = [
        {
            title: "Toyota Innova Crysta",
            image: Toyota,
            description: (
                <>
                    A spacious <Box component="span" sx={{ fontWeight: 600 }}>7-seater</Box> that’s all about comfort and smooth travel.
                    Whether it’s a family trip, an office ride, or a weekend getaway with friends — the Crysta makes every journey relaxed and enjoyable.
                </>
            ),
        },
        {
            title: "Maruti Swift",
            image: Swift,
            description: (
                <>
                    A smart and compact car that’s perfect for city rides and daily commutes. Easy to zip through traffic, fuel-efficient, and super comfortable for small groups
                    (<Box component="span" sx={{ fontWeight: 600 }}>4 seater</Box>).
                </>
            ),
        },
        {
            title: "Tata Indica",
            image: Indica,
            description: (
                <>
                    A simple and reliable hatchback, perfect for budget-friendly city rides and short trips. Compact yet comfortable.
                    (<Box component="span" sx={{ fontWeight: 600 }}>4 Seater</Box>).
                </>
            ),
        },
        {
            title: "Maruti Ertiga",
            image: ertiga,
            description: (
                <>
                    A practical and spacious MPV that’s perfect for families and small groups. Comfortable seating, smooth drives, and plenty of room for luggage make every trip easy and relaxed
                    (<Box component="span" sx={{ fontWeight: 600 }}>7 seater</Box>).
                </>
            ),
        }
    ];
    return (
        <>
            {/* Title */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "900px" },
                        wordWrap: "break-word",
                        lineHeight: 1.5,
                        textAlign: "center",
                    }}
                >
                    Discover More with SJS Tour Packages
                </Typography>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: 2, sm: 3, md: 4 },
                }}
            >
                {cars.map((car, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: "1 1 50%", // each card takes 50% of the row
                            maxWidth: 500,   // optional, limits card size
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: 2,
                            border: "1px solid #C3C3C3",
                            overflow: "hidden",
                            bgcolor: "#fff",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={car.image}
                            alt={car.title}
                            sx={{
                                width: "100%",
                                height: { xs: 150, sm: 180, md: 180 },
                                objectFit: "contain",
                                mt: 3,
                            }}
                        />
                        <CardContent
                            sx={{
                                bgcolor: "#F5F5F5",
                                p: { xs: 1.5, sm: 2, md: 2.5 },
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                                    fontWeight: 600,
                                    mb: 1,
                                }}
                            >
                                {car.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "justify",
                                    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                                }}

                            >
                                {car.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>


            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column", // stack text vertically
                    borderRadius: "20px",
                    backgroundColor: "#EFF5FF",
                    boxShadow: "none",
                    maxWidth: { xs: "95%", sm: 1100 },
                    mx: "auto",
                    p: 3,
                    overflow: "hidden",
                    justifyContent: "center", // vertical centering
                    alignItems: "center",     // horizontal centering
                    textAlign: "center",
                    mt: 7
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
                        We’re Here to Help You Commute Smarter
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#343434",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
                            lineHeight: 1.5,
                            maxWidth: "700px"
                        }}
                    >
                        Tell us your requirements and our team will get back to you with the perfect commute plan.
                    </Typography>
                </Box>
                <ContactUs />
            </Card>
            <Footer/>


        </>
    );
}

export default Vehicles;

