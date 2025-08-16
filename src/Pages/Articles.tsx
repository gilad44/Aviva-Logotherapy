import { Box, Button, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../comps/ArticleCard";
import type { Article } from "../data/articles";
import { articles } from "../data/articles";

const Articles = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Resources & Articles - Aviva Logotherapy</title>
        <meta
          name="description"
          content="Insights and guidance on finding meaning, overcoming challenges, and living a more fulfilling life through logotherapy."
        />
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
              fontFamily: "andika",
              fontWeight: "600",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Resources & Articles
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "#093241",
              fontFamily: "cairo",
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            Insights and guidance on finding meaning, overcoming challenges, and
            living a more fulfilling life
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {articles.map((article: Article, index: number) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "40%", md: "100%", lg: "100%" },
                }}
              >
                <ArticleCard article={article} />
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#093241",
                fontFamily: "andika",
                fontWeight: "600",
                mb: 3,
              }}
            >
              Want More Insights?
            </Typography>
            <Typography
              sx={{
                color: "#093241",
                fontFamily: "cairo",
                fontSize: "1.1rem",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              These articles are just the beginning. In our sessions, we can
              explore these topics more deeply and apply them to your unique
              situation and life circumstances.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                background: "linear-gradient(45deg, #093241 30%, #1a4a5a 90%)",
                color: "white",
                fontFamily: "andika",
                fontWeight: "600",
                px: 4,
                py: 2,
                borderRadius: 3,
                fontSize: "1.1rem",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #1a4a5a 30%, #093241 90%)",
                },
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Articles;
