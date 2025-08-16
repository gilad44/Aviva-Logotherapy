import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ArticleCard from "../comps/ArticleCard";
import { articles } from "../data/articles";

const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const LogotherapyArticle = () => {
  return (
    <>
      <Helmet>
        <title>Logotherapy Articles</title>
      </Helmet>
      <Box
        sx={{
          minHeight: "100vh",
          pt: "10rem",
          pb: "3rem",
          position: "relative",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/images/home banner/cliff-tree.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -2,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: "center",
              color: "black",
              fontFamily: "libre baskerville",
              fontWeight: "600",
              mb: 6,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Logotherapy Articles
          </Typography>
          <Box display="flex" flexDirection="column" gap={5}>
            {articles.map((article, idx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                variants={slideUpVariants}
              >
                <ArticleCard key={idx} article={article} />
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LogotherapyArticle;
