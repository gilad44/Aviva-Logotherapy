import { Box, Typography, Card, CardContent, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs and challenges. We'll work together to find meaning and purpose in your life journey.",
      duration: "50-60 minutes",
      pricing: "Contact for Pricing",
      features: ["Personalized approach", "Meaning-centered therapy", "Holistic healing", "Flexible scheduling"]
    },
    {
      title: "Online Sessions",
      description: "Convenient virtual therapy sessions from the comfort of your home. Same quality care, accessible anywhere.",
      duration: "50-60 minutes",
      pricing: "Contact for Pricing",
      features: ["Secure video platform", "No travel time", "Same therapeutic benefits", "Flexible scheduling"]
    },
    {
      title: "Workshops & Group Sessions",
      description: "Join others on the journey to finding meaning. Group sessions provide community support and shared learning experiences.",
      duration: "90-120 minutes",
      pricing: "Contact for Pricing",
      features: ["Community support", "Shared learning", "Group dynamics", "Cost-effective"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Aviva Logotherapy</title>
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
            backgroundImage: "url('images/home banner/noHorizon-ocean.jpg')",
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
              fontFamily: "libre baskerville",
              fontWeight: "600",
              mb: 4,
              fontSize: { xs: "2rem", md: "3rem" }
            }}
          >
            My Services
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "#093241",
              fontFamily: "lora",
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.3rem" }
            }}
          >
            I offer a range of therapeutic services designed to help you find meaning,
            overcome challenges, and live a more fulfilling life.
          </Typography>

          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 6,
            justifyContent: "space-between"
          }}>
            {services.map((service, index) => (
              <Box key={index} sx={{
                width: { xs: "100%", md: "calc(33.333% - 16px)" },
                minWidth: { xs: "100%", md: "calc(33.333% - 16px)" }
              }}>
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        color: "#093241",
                        fontFamily: "libre baskerville",
                        fontWeight: "600",
                        mb: 2,
                        fontSize: { xs: "1.5rem", md: "1.8rem", lg: "2rem", xl: "1.5rem" }
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#093241",
                        fontFamily: "lora",
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#093241",
                          fontFamily: "libre baskerville",
                          fontWeight: "600",
                          mb: 1
                        }}
                      >
                        Duration: {service.duration}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#093241",
                          fontFamily: "libre baskerville",
                          fontWeight: "600"
                        }}
                      >
                        Pricing: {service.pricing}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#093241",
                          fontFamily: "libre baskerville",
                          fontWeight: "600",
                          mb: 2
                        }}
                      >
                        What's Included:
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <Typography
                              sx={{
                                color: "#093241",
                                fontFamily: "lora",
                                mb: 0.5
                              }}
                            >
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>

                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={() => navigate("/contact")}
                      sx={{
                        background: "linear-gradient(45deg, #093241 30%, #1a4a5a 90%)",
                        color: "white",
                        fontFamily: "libre baskerville",
                        fontWeight: "600",
                        py: 1.5,
                        borderRadius: 2,
                        mt: "auto",
                        "&:hover": {
                          background: "linear-gradient(45deg, #1a4a5a 30%, #093241 90%)",
                        },
                      }}
                    >
                      Schedule a Session
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#093241",
                fontFamily: "libre baskerville",
                fontWeight: "600",
                mb: 3
              }}
            >
              Ready to Start Your Journey?
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                background: "linear-gradient(45deg, #093241 30%, #1a4a5a 90%)",
                color: "white",
                fontFamily: "libre baskerville",
                fontWeight: "600",
                px: 4,
                py: 2,
                borderRadius: 3,
                fontSize: "1.1rem",
                "&:hover": {
                  background: "linear-gradient(45deg, #1a4a5a 30%, #093241 90%)",
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services;
