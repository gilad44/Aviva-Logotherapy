import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import type { Article } from "../data/articles";

const ArticleCard = ({ article }: { article: Article }) => {
  const [showFullArticle, setShowFullArticle] = useState(false);
  return (
    <Card
      sx={{
        height: showFullArticle ? "auto" : "22rem",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <CardContent
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: "#093241",
            fontFamily: "andika",
            fontWeight: "600",
            mb: 2,
            lineHeight: 1.3,
            flexGrow: 1,
          }}
        >
          {article.title}
        </Typography>

        <Typography
          sx={{
            color: "#093241",
            fontFamily: "libera baskerville",
            fontSize: "1.15rem",
            mb: 3,
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {showFullArticle ? article.content : article.excerpt}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#093241",
              fontFamily: "cairo",
              opacity: 0.7,
            }}
          >
            {article.readTime}
          </Typography>
        </Box>

        {!showFullArticle && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowFullArticle(true)}
            sx={{
              borderColor: "#093241",
              color: "#093241",
              fontFamily: "andika",
              fontWeight: "600",
              "&:hover": {
                borderColor: "#1a4a5a",
                backgroundColor: "rgba(9, 50, 65, 0.1)",
              },
            }}
          >
            Read More
          </Button>
        )}
        {showFullArticle && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowFullArticle(false)}
            sx={{
              borderColor: "#093241",
              color: "#093241",
              fontFamily: "andika",
              fontWeight: "600",
              "&:hover": {
                borderColor: "#1a4a5a",
                backgroundColor: "rgba(9, 50, 65, 0.1)",
              },
            }}
          >
            Show Less
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
