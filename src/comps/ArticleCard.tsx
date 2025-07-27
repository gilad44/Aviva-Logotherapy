import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export type Article = {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                height: "100%",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                },
            }}
        >
            <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 2 }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#093241",
                            fontFamily: "andika",
                            fontWeight: "600",
                            backgroundColor: "rgba(9, 50, 65, 0.1)",
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            display: "inline-block"
                        }}
                    >
                        {article.category}
                    </Typography>
                </Box>

                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        color: "#093241",
                        fontFamily: "andika",
                        fontWeight: "600",
                        mb: 2,
                        lineHeight: 1.3,
                        flexGrow: 1
                    }}
                >
                    {article.title}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#093241",
                        fontFamily: "cairo",
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1
                    }}
                >
                    {article.excerpt}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#093241",
                            fontFamily: "cairo",
                            opacity: 0.7
                        }}
                    >
                        {article.readTime}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#093241",
                            fontFamily: "cairo",
                            opacity: 0.7
                        }}
                    >
                        {article.date}
                    </Typography>
                </Box>

                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/contact")}
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
            </CardContent>
        </Card>
    );
};

export default ArticleCard; 