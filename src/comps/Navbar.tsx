import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import ButterflyScene from "../threeDComps/ButterflyScene";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [butterflyPosition, setButterflyPosition] = useState<
  //   [number, number, number]
  // >([0, 0, 0]); // Butterfly always at origin in 3D
  // const [isAnimating, setIsAnimating] = useState(false);
  // const [canvasTop, setCanvasTop] = useState<string>("-2.4rem");
  // const [canvasLeft, setCanvasLeft] = useState<string>("-14rem");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "60px",
    opacity: 1,
  });
  const [articlesAnchorEl, setArticlesAnchorEl] = useState<null | HTMLElement>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Articles", to: "/articles", hasDropdown: true },
    { label: "FAQ", to: "/faq" },
  ];

  const articlesDropdownItems = [
    { label: "Logotherapy", to: "/logotherapy-article" },
    { label: "CBT Therapy", to: "/cbt-therapy" },
    { label: "Reiki", to: "/reiki" },
  ];

  const handleArticlesClick = (event: React.MouseEvent<HTMLElement>) => {
    setArticlesAnchorEl(event.currentTarget);
  };

  const handleArticlesClose = () => {
    setArticlesAnchorEl(null);
  };

  const handleDropdownItemClick = (to: string) => {
    setArticlesAnchorEl(null);
    navigate(to);
  };

  useEffect(() => {
    // Check if current path matches any dropdown item
    const isDropdownPage = articlesDropdownItems.some(item => item.to === location.pathname);

    if (isDropdownPage) {
      // If on a dropdown page, show indicator under Articles
      const articlesIndex = navLinks.findIndex(link => link.hasDropdown);
      if (articlesIndex !== -1) {
        setTimeout(() => {
          updateIndicatorPosition(articlesIndex);
        }, 100);
      }
    } else {
      // Otherwise, show indicator under the current page
      const currentIndex = navLinks.findIndex(
        (link) => link.to === location.pathname
      );
      if (currentIndex !== -1) {
        setTimeout(() => {
          updateIndicatorPosition(currentIndex);
        }, 100);
      }
    }
  }, [location.pathname]);

  // const updateButterflyPosition = (index: number) => {
  //   if (navRef.current) {
  //     const navContainer = navRef.current;
  //     const buttons = navContainer.querySelectorAll("button");
  //     if (buttons[index]) {
  //       const button = buttons[index] as HTMLElement;
  //       const containerRect = navContainer.getBoundingClientRect();
  //       const buttonRect = button.getBoundingClientRect();
  //       // Use left/top for correct movement
  //       const x = buttonRect.left - containerRect.left + buttonRect.width / 20;
  //       const y = buttonRect.top - containerRect.top + buttonRect.height / 20;
  //       const butterflyOffset = 40; // px above button center
  //       const butterflyWidth = 60; // px, approximate width of butterfly indicator
  //       const initialOffset = -224; // -14rem in px (adjust if your root font size is different)
  //       const newCanvasLeft = `${x - butterflyWidth / 4 + initialOffset}px`;
  //       const newCanvasTop = `${y - butterflyOffset}px`;
  //       setCanvasTop(newCanvasTop);
  //       setCanvasLeft(newCanvasLeft);
  //       setIsAnimating(true);
  //       setTimeout(() => {
  //         setIsAnimating(false);
  //       }, 2100);
  //     }
  //   }
  // };

  const updateIndicatorPosition = (index: number) => {
    if (navRef.current) {
      const navContainer = navRef.current;
      const buttons = navContainer.querySelectorAll("button");
      if (buttons[index]) {
        const button = buttons[index] as HTMLElement;
        const containerRect = navContainer.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        setIndicatorStyle({
          left: `${buttonRect.left - containerRect.left}px`,
          width: `${buttonRect.width}px`,
          opacity: 1,
        });
      }
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
        height: { "3xs": "5rem", sm: "6.5rem", lg: "8rem", xl: "6rem" },
        left: 0,
        right: 0,
        maxWidth: "100%",
        background: "linear-gradient(to right, #fffbee, rgba(255, 255, 255, 0.4))",
        boxShadow: "5px 5px 2px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{ textDecoration: "none" }}
          display="flex"
          width="100%"
          height="100%"
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
                xl: "7vmax",
              },
              height: {
                "3xs": "10vmax",
                sm: "9vmax",
                md: "6vmax",
                lg: "13vmax",
                xl: "7vmax",
              },
              mr: "2rem",
              mb: 1,
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
                xl: "2vmax",
              }}
              fontFamily="libre baskerville"
              color="black"
              sx={{ textShadow: "0.15rem 0 3px whitesmoke" }}
            >
              Aviva Gros-Margalit
            </Typography>
            <Typography
              fontFamily="lora"
              fontSize={{
                "3xs": "3vmax",
                md: "1.6vmax",
                lg: "1.8vmax",
                xl: "1.3vmax",
              }}
              color="black"
              sx={{
                textShadow: "0.15rem 0 3px whitesmoke",
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
          ref={navRef}
          sx={{
            display: { "3xs": "none", md: "flex" },
            position: "relative",
            // top: 0,
            // mr: "1rem",
            gap: 1,
            width: "30rem",
            height: "2rem",
            zIndex: 3,
          }}
        >
          {/* Animated Bottom Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-2px",
              height: "2px",
              backgroundColor: "black",
              borderRadius: "2px",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 10,
              ...indicatorStyle,
            }}
          />

          {/* 3D Butterfly Indicator */}
          {/* <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "120%",
            }}
          >
            <OrbitControls />
            <ButterflyScene
              position={butterflyPosition}
              isAnimating={isAnimating}
              canvasTop={canvasTop}
              canvasLeft={canvasLeft}
            />
          </Box> */}

          {navLinks.map((link, idx) => (
            <Button
              key={link.to}
              onClick={(e) => {
                e.preventDefault();
                if (link.hasDropdown) {
                  handleArticlesClick(e);
                } else {
                  navigate(link.to);
                }
              }}
              sx={{
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
                fontSize: { md: "0.8rem", lg: "1rem", xl: "0.9rem" },
                fontFamily: "lora",
                color: "black",
                py: 1.5,
                minWidth: 0,
                border: "none",
                position: "relative",
                zIndex: 100,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 0.5,
                    fontSize: "1rem",
                    transition: "transform 0.2s ease",
                    transform: Boolean(articlesAnchorEl) ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            </Button>
          ))}

          {/* Articles Dropdown Menu */}
          <Menu
            anchorEl={articlesAnchorEl}
            open={Boolean(articlesAnchorEl)}
            onClose={handleArticlesClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              // mt: 1,
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(255, 251, 238, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                // borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            {articlesDropdownItems.map((item) => (
              <MenuItem
                key={item.to}
                onClick={() => handleDropdownItemClick(item.to)}
                sx={{
                  fontFamily: 'lora',
                  fontSize: '0.9rem',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
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
