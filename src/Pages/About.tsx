import { Box, Typography, Container } from "@mui/material";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Aviva Logotherapy</title>
      </Helmet>
      <Box
        sx={{
          minHeight: "100vh",
          pt: "10rem",
          pb: "3rem",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('images/home banner/orange-horizon-sea.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -2,
          },
          "&::after": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.5)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: "center",
              color: "#093241",
              fontFamily: "andika",
              fontWeight: "600",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" }
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "#093241",
              fontFamily: "cairo",
              mb: 6,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              opacity: 0.8,
            }}
          >
            Your journey toward meaning and purpose starts here
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#093241",
                  fontFamily: "andika",
                  fontWeight: "600",
                  mb: 3,
                }}
              >
                Hi, I'm Aviva
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#093241",
                  fontFamily: "cairo",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                With over 30 years of experience in helping people find meaning and purpose,
                I am a certified Logotherapist, Life Coach, and holistic wellness practitioner.
                My approach integrates evidence-based logotherapy techniques with modern coaching
                methods to help you discover your unique path to fulfillment.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#093241",
                  fontFamily: "cairo",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                I believe that every person has an innate capacity to find meaning, even in
                the most challenging circumstances. Through our work together, you'll learn to
                transform suffering into growth, discover your authentic values, and create a
                life that truly reflects who you are.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#093241",
                  fontFamily: "cairo",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                My practice is built on the foundation of Viktor Frankl's logotherapy,
                combined with contemporary research in positive psychology and mindfulness.
                I work with individuals facing life transitions, existential questions,
                anxiety, depression, and those simply seeking deeper meaning in their lives.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "250px", sm: "300px", lg: "350px" },
                  height: { xs: "250px", sm: "300px", lg: "350px" },
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
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
