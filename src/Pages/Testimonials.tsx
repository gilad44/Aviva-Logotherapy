import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TestimonialsData } from "../data/TestimonialsData";

const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container
      sx={{
        mt: {
          xl: "-0.7rem",
          lg: "6rem",
        },
      }}
    >
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h3"
          textAlign="center"
          color="black"
          p="0.5rem"
          width="50%"
          bgcolor="rgba(255, 248, 221, 1)"
          borderRadius="10px"
          fontFamily="libera baskerville"
          sx={{
            border: "5px groove white",
            animation: scrolled
              ? "none"
              : "subtleBounce 5s ease-in-out infinite",
            "@keyframes subtleBounce": {
              "0%, 50%, 100%": {
                transform: "translateY(0)",
              },
              "30%": {
                transform: "translateY(-8px)",
              },
            },
          }}
        >
          Testimonials
        </Typography>
      </Box>
      <Grid
        rowSpacing="1rem"
        container
        spacing={10}
        sx={{
          mt: { xl: "3rem", lg: "2rem" },
          mb: { lg: "3rem" },
          position: "relative",
        }}
      >
        {TestimonialsData.map((t, idx) => (
          <Grid key={idx} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              variants={slideUpVariants}
            >
              <Paper
                sx={{
                  width: { xl: "70rem", lg: "60rem" },
                  maxHeight: "15rem",
                  p: "2rem",
                  border: "5px groove white",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 3px gray",
                  bgcolor: "rgba(255, 248, 221, 1)",
                }}
              >
                <p>{t.text}</p>
                <br />
                <p>{t.name}</p>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
