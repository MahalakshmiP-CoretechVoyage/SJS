import React, { useState, useEffect, useRef } from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from '@iconify/react';
import popupImageDesktop from "../assets/popupImage.png";
import popupImageMobile from "../assets/PopupImageMobile.png";
import popup1 from "../assets/popup1.png";
import popup2 from "../assets/popup2.png";
import popup3 from "../assets/popup3.png";
import popup4 from "../assets/popup4.png";

function PopupDialog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [visiblePopups, setVisiblePopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
  });

  const [popup1Text, setPopup1Text] = useState("");
  const [popup2Text, setPopup2Text] = useState("");
  const [popup3Text, setPopup3Text] = useState("");
  const [popup4Text, setPopup4Text] = useState("");

  const fullPopup1Text = "I feel safer knowing it’s GPS tracked ";
  const fullPopup2Text = "Yes! Your ride arrives in 5 mins ";
  const fullPopup3Text = "Is my cab on time today?";
  const fullPopup4Text = "Every day pickup and drop is smooth!";

  const popupSectionRef = useRef(null);
  const [popupSectionVisible, setPopupSectionVisible] = useState(false);

  // Intersection Observer
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

    if (popupSectionRef.current) observer.observe(popupSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Show popups with delay
  useEffect(() => {
    if (!popupSectionVisible || isMobile) return; // Skip popups on mobile

    const timers = [
      setTimeout(() => setVisiblePopups(v => ({ ...v, popup1: true })), 1000),
      setTimeout(() => setVisiblePopups(v => ({ ...v, popup2: true })), 2000),
      setTimeout(() => setVisiblePopups(v => ({ ...v, popup3: true })), 3000),
      setTimeout(() => setVisiblePopups(v => ({ ...v, popup4: true })), 4000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [popupSectionVisible, isMobile]);

  // Typing effect
  const useTypingEffect = (visible, fullText, setText) => {
    useEffect(() => {
      if (visible) {
        let i = 0;
        const interval = setInterval(() => {
          setText(fullText.slice(0, i + 1));
          i++;
          if (i === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
      }
    }, [visible]);
  };

  useTypingEffect(visiblePopups.popup1, fullPopup1Text, setPopup1Text);
  useTypingEffect(visiblePopups.popup2, fullPopup2Text, setPopup2Text);
  useTypingEffect(visiblePopups.popup3, fullPopup3Text, setPopup3Text);
  useTypingEffect(visiblePopups.popup4, fullPopup4Text, setPopup4Text);

  return (
    <Grid container ref={popupSectionRef} sx={{ mt: 5 }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 600 },
          borderRadius: 2,
          backgroundImage: `url(${isMobile ? popupImageMobile : popupImageDesktop})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
            // top: { xs: "10px", sm: "20px", md: "100px", lg: "120px" },
            top:{
              md:"-170px",
              xs: "10px",
               sm: "20px",
               lg: "-120px"
            }
        }}
      >
        {!isMobile && (
          <>
            {/* Popup 1 */}
            {visiblePopups.popup1 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "57%",
                  left: "2%",
                  transform: "translateY(-50%)",
                  width: 201,
                  height: 96.83,
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
                <Typography variant="h2" align="center" sx={{ mb: 4 }}>
                  {popup1Text}
                  {popup1Text.length === fullPopup1Text.length && (
                    <Icon icon="tdesign:location-filled" width={16} height={17} style={{ color: "red" }} />
                  )}
                </Typography>
              </Box>
            )}

            {/* Popup 2 */}
            {visiblePopups.popup2 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "77%",
                  left: "68%",
                  transform: "translate(-50%, -100%)",
                  backgroundImage: `url(${popup2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: 250,
                  minHeight: 70,
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h2" align="center" sx={{ ml: 5, mr: 5, mb: 2 }}>
                  {popup2Text}
                  {popup2Text.length === fullPopup2Text.length && (
                    <Icon icon="streamline-ultimate-color:car-4" width={16} height={17} />
                  )}
                </Typography>
              </Box>
            )}

            {/* Popup 3 */}
            {visiblePopups.popup3 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "22%",
                  left: "68%",
                  transform: "translate(-60%, -10%)",
                  backgroundImage: `url(${popup3})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: 260,
                  height: 65.5,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }} align="center">{popup3Text}</Typography>
              </Box>
            )}

            {/* Popup 4 */}
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
                  width: 205,
                  height: 96.83,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h2" sx={{ mb: 5 }} align="center">{popup4Text}</Typography>
              </Box>
            )}
          </>
        )}
      </Box>
    </Grid>
  );
}

export default PopupDialog;
