import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Logotherapy", to: "/logotherapy" },
    { label: "Services", to: "/services" },
    { label: "Articles", to: "/articles" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
        height: { "3xs": "5rem", sm: "6.5rem", lg: "8rem" },
        left: 0,
        right: 0,
        maxWidth: "100%",
        background: "rgba(82, 139, 205, 0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          component={Link}
          to="/"
        >
          <Box
            sx={{
              width: {
                "3xs": "10vmax",
                sm: "8vmax",
                md: "6vmax",
                lg: "13vmax",
                xl: "10vmax",
              },
              height: {
                "3xs": "10vmax",
                sm: "9vmax",
                md: "6vmax",
                lg: "13vmax",
                xl: "10vmax",
              },
              mr: 2,
              mb: 1
            }}
          >
            <img
              src="images/logo/bttrfly_left-noBG.png"
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              fontSize={{
                "3xs": "6vmax",
                sm: "4vmax",
                md: "3vmax",
                lg: "4vmax",
                xl: "3vmax",
              }}
              fontWeight={400}
              fontFamily="barlow condensed"
              color="#303e78ff"
              sx={{ textShadow: "0.15rem 0 3px whitesmoke" }}
            >
              Aviva Gros-Margalit
            </Typography>
            <Typography
              fontFamily="andika"
              fontSize={{ "3xs": "3vmax", md: "1.6vmax", lg: "1.8vmax" }}
              color="#303e78ff"
              sx={{
                textShadow: "00.15rem 0 3px whitesmoke",
                textAlign: "center",
                mb: 2,
              }}
            >
              Logotherapy & Coaching
            </Typography>
          </Box>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { "3xs": "none", md: "flex" },
            position: "relative",
            mr: "1rem",
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={Link}
              to={link.to}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: { md: "0.8rem" },
                color: "#00094cff",
                py: 1.5,
                minWidth: 0,
                border: "none",
                position: "relative",
                zIndex: 1,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: location.pathname === link.to ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "navy",
                  transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile nav */}
        <Box
          sx={{
            display: { "3xs": "flex", md: "none" },
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon
              sx={{
                marginTop: { "3xs": "2vmax" },
                width: { "3xs": "7vmax", sm: "5vmax" },
                height: { "3xs": "7vmax", sm: "5vmax" },
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        slotProps={{ paper: { sx: { width: 240 } } }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.to}>
              <ListItemButton
                component={Link}
                to={link.to}
                selected={location.pathname === link.to}
                onClick={handleDrawerToggle}
              >
                <ListItemText
                  primary={link.label}
                  sx={{ textAlign: "right" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
