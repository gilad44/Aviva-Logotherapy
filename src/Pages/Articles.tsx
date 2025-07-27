import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ArticleCard from "../comps/ArticleCard";
import type { Article } from "../comps/ArticleCard";

const Articles = () => {
  const navigate = useNavigate();

  const articles: Article[] = [
    {
      title: "Finding Meaning in Everyday Life",
      excerpt: "Discover how to find purpose and meaning in the ordinary moments of your daily routine, transforming mundane tasks into opportunities for growth and fulfillment.",
      category: "Meaning & Purpose",
      readTime: "5 min read",
      date: "December 2024"
    },
    {
      title: "The Art of Choosing Your Attitude",
      excerpt: "Explore Viktor Frankl's powerful concept that we always have the freedom to choose our response to any situation, even in the most difficult circumstances.",
      category: "Personal Growth",
      readTime: "7 min read",
      date: "November 2024"
    },
    {
      title: "Coping with Existential Anxiety",
      excerpt: "Learn practical strategies for managing the anxiety that comes from questioning life's meaning and purpose, and how to transform it into motivation.",
      category: "Anxiety & Stress",
      readTime: "6 min read",
      date: "November 2024"
    },
    {
      title: "Finding Meaning in Suffering",
      excerpt: "How to discover purpose and growth even in the most challenging times, using suffering as a catalyst for personal transformation and deeper understanding.",
      category: "Resilience",
      readTime: "8 min read",
      date: "October 2024"
    },
    {
      title: "The Three Paths to Meaning",
      excerpt: "Explore the three fundamental ways we can find meaning in life: through creative work, through experiences and relationships, and through our attitude toward suffering.",
      category: "Meaning & Purpose",
      readTime: "6 min read",
      date: "October 2024"
    },
    {
      title: "Building Authentic Relationships",
      excerpt: "How meaningful connections with others can become a powerful source of purpose and fulfillment in our lives.",
      category: "Relationships",
      readTime: "5 min read",
      date: "September 2024"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources & Articles - Aviva Logotherapy</title>
        <meta name="description" content="Insights and guidance on finding meaning, overcoming challenges, and living a more fulfilling life through logotherapy." />
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
              fontSize: { xs: "2rem", md: "3rem" }
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
              fontSize: { xs: "1.1rem", md: "1.3rem" }
            }}
          >
            Insights and guidance on finding meaning, overcoming challenges, and living a more fulfilling life
          </Typography>

          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4
          }}>
            {articles.map((article, index) => (
              <Box key={index} sx={{
                width: { xs: "40%", md: "100%", lg: "100%" },
              }}>
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
                mb: 3
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
                lineHeight: 1.6
              }}
            >
              These articles are just the beginning. In our sessions, we can explore these topics
              more deeply and apply them to your unique situation and life circumstances.
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
                  background: "linear-gradient(45deg, #1a4a5a 30%, #093241 90%)",
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
