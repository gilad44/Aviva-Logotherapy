import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { RiArrowDownWideLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Testimonials from "./Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Home - Aviva Logotherapy</title>
      </Helmet>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            "&::before": {
              content: '""',
              position: "fixed",
              top: 0,
              left: { xl: -150, lg: 0 },
              right: { xl: 0, lg: -150 },
              bottom: { xl: -200, lg: -300 },
              backgroundImage: "url('/images/home banner/cliff-tree.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            },
          }}
        />

        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            justifyContent: "space-between",
            minHeight: "100vh",
            px: 3,
            gap: 4,
            pt: { xs: "8rem", md: "10rem" },
           
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              mt: 2,
              gap: 0.5,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontFamily: "libre baskerville",
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "2rem",
                  lg: "1.8rem",
                  xl: "2.25rem",
                },
                mb: 2,
                mt: -3,
                lineHeight: 1.5,
              }}
            >
              Meaning-Centered Therapy <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for
              a Fulfilling Life
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontFamily: "lora",
                fontWeight: "500",
                mb: 4,
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.35rem",
                },
                lineHeight: 1.6,
                WebkitTextStroke: "0.04px rgba(255, 255, 255, 0.7)",
              }}
            >
              Discover your purpose and find meaning in every moment through
              evidence-based logotherapy techniques.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/services")}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "lora",
                  fontWeight: "600",
                  fontSize: { xs: "1rem", sm: "1.1rem", lg: "1rem" },
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    backgroundColor: "rgba(185, 213, 217, 1)",
                  },
                }}
              >
                Explore Services
              </Button>
            </Box>
          </Box>

          {/* Right Content - Profile Image */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: { xs: "100%", md: "40%" },
              mt: -1,
              mr: 8,
            }}
          >
            <Box
              sx={{
                width: { md: "200px", lg: "250px" },
                height: { md: "200px", lg: "250px" },
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #093241",
                boxShadow: "0 8px 32px rgba(9, 50, 65, 0.3)",
              }}
            >
              <img
                src="images/Profile/Aviva.jpeg"
                alt="Aviva Gros-Margalit"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.35rem",
                color: "black",
                fontFamily: "libre baskerville",

                mt: 1,
                textAlign: "center",
              }}
            >
              Aviva Gros-Margalit
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "black",
                fontFamily: "lora",
                textAlign: "center",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.1rem",
                  lg: "1rem",
                },
                fontWeight: "500",
              }}
            >
              Certified Logotherapist & Life Coach
            </Typography>
          </Box>
        </Box>

        {/* <SlArrowDown
          style={{
            position: "fixed",
            fontSize: 10,
            transform: "scaleX(40) scaleY(6)",
            zIndex: 1000,
            left: "50%",
            bottom: "1rem",
            color: "white",
          }}
        /> */}

        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
