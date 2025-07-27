import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "&::before": {
              content: '""',
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "url('images/home banner/blue-horizon-ocean.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
              zIndex: -1,
            }
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(203, 227, 205, 0.43)",
            zIndex: 1,
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
              gap: 0.5

            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#093241",
                fontFamily: "andika",
                fontWeight: "700",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "2rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Meaning-Centered Therapy for a Fulfilling Life
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#093241",
                fontFamily: "cairo",
                mb: 4,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.2rem" },
                lineHeight: 1.6,
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
                  backgroundColor: "#093241",
                  color: "white",
                  fontFamily: "andika",
                  fontWeight: "600",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#1a4a5a",
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
              mr: 8
            }}
          >
            <Box
              sx={{
                width: { md: "200px", lg: "250px" },
                height: { md: "200px", lg: "250px" },
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #093241",
                boxShadow: "0 8px 32px rgba(9, 50, 65, 0.3)",
              }}
            >
              <img
                src="images/Profile/Cut-Profile.jpg"
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
                color: "#093241",
                fontFamily: "andika",
                fontWeight: "600",
                mt: 1,
                textAlign: "center",
              }}
            >
              Aviva Gros-Margalit
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#093241",
                fontFamily: "cairo",
                textAlign: "center",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" },
                fontWeight: "500",
              }}
            >
              Certified Logotherapist & Life Coach
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
