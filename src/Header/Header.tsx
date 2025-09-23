import React, { useState } from "react";
import { Box, Button, Grid, Typography, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Outlet } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function Header() {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    { label: "Home", path: "/home" },
    { label: "Tours", path: "/tours" },
    { label: "Corporate Rentals", path: "/corporaterental" },
    { label: "About Us", path: "/aboutus" },
    { label: "Vehicles", path: "/vehicles" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      {/* Header */}
      <Box sx={{ bgcolor: "#fff", px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 2 } }}>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item xs={6} sm={3}>
            <Box sx={{ width: { xs: "60px", sm: "108px" }, height: { xs: "40px", sm: "84px" } }}>
              <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Box>
          </Grid>

          {/* Desktop Nav */}
          <Grid item xs={12} sm={9} sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid container spacing={2} justifyContent="flex-end">
              {buttons.map(({ label, path }) => (
                <Grid item key={label}>
                  <Button
                    onClick={() => {
                      setActive(label);
                      navigate(path);
                    }}
                    sx={{
                      backgroundColor: active === label ? "#378FED" : "#fff",
                      boxShadow: "none",
                      textTransform: "none",
                      border: "none",
                      px: 2,
                      "&:hover": { backgroundColor: active === label ? "#2f7bd1" : "#f0f6fd" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: active === label ? "#fff" : "#000",
                        fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      {label}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Mobile Hamburger */}
          <Grid item xs={6} sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(true)}>
             <Icon icon="material-symbols-light:menu-rounded" width="24" height="24"  style={{color: "#000"}} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 220 }, // smaller width
        }}
      >
        <Box
          sx={{ width: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)} // close when any item is clicked
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {buttons.map(({ label, path }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  sx={{ minHeight: 40, py: 0.5 }} // smaller height
                  onClick={() => {
                    setActive(label);
                    navigate(path);
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: active === label ? 600 : 400,
                        }}
                      >
                        {label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Page Content */}
      <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 2 } }}>
        <Outlet />
      </Box>
    </>
  );
}
