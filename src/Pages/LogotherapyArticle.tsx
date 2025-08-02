import { Box, Typography, Container, Paper } from "@mui/material";
import { Helmet } from "react-helmet";

const LogotherapyArticle = () => {
    return (
        <>
            <Helmet>
                <title>Logotherapy - Understanding Meaning-Centered Therapy</title>
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
                        background: "rgba(255, 255, 255,0.7)",
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
                            color: "black",
                            fontFamily: "libre baskerville",
                            fontWeight: "600",
                            mb: 2,
                            fontSize: { xs: "2rem", md: "3rem" }
                        }}
                    >
                        Understanding Logotherapy
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: "black",
                            fontFamily: "lora",
                            mb: 6,
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            opacity: 0.8,
                        }}
                    >
                        'When we are no longer able to change a situation, we are challenged to change ourselves'&nbsp;&nbsp; <span style={{ fontFamily: "lora", fontSize: "0.8rem", fontWeight: "600" }}>(Viktor Frankl)</span>
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "black",
                                fontFamily: "libre ",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            What is Logotherapy?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            Logotherapy, developed by Viktor Frankl, is a form of psychotherapy that focuses on helping individuals find meaning and purpose in their lives. The term "logo" comes from the Greek word for "meaning," and this therapeutic approach is based on the fundamental belief that the primary human drive is not pleasure (as Freud suggested) or power (as Adler suggested), but rather the search for meaning.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            Frankl, a Holocaust survivor and psychiatrist, developed this approach after observing that those who found meaning in their suffering were more likely to survive the concentration camps. His experiences led him to understand that even in the most difficult circumstances, humans have the capacity to choose their attitude toward suffering and find meaning in it.
                        </Typography>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "black",
                                fontFamily: "libre ",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            Core Principles of Logotherapy
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre ",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    1. Freedom of Will
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "black",
                                        fontFamily: "lora",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    Even in the most constrained circumstances, we always have the freedom to choose our attitude toward what happens to us. This freedom cannot be taken away, even in the face of suffering.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre ",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    2. Will to Meaning
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "black",
                                        fontFamily: "lora",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    The primary motivation in human life is not the pursuit of pleasure or power, but the search for meaning. When this need is frustrated, people experience what Frankl called "existential vacuum."
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre ",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    3. Meaning in Life
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "black",
                                        fontFamily: "lora",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    Meaning can be found in three ways: through creative work or deeds, through experiencing something or encountering someone, and through the attitude we take toward unavoidable suffering.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "black",
                                fontFamily: "libre ",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            How Logotherapy Works in Practice
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            In logotherapy sessions, the therapist helps clients explore their values, beliefs, and what gives their life meaning. Rather than focusing on past traumas or symptoms, the emphasis is on the present and future - what meaning can be found in current circumstances and what purpose can be pursued going forward.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            The therapist uses specific techniques such as paradoxical intention (facing fears directly), dereflection (shifting focus away from problems), and Socratic dialogue to help clients discover their unique path to meaning.
                        </Typography>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "black",
                                fontFamily: "libre ",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            Who Can Benefit from Logotherapy?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            Logotherapy is particularly effective for individuals experiencing:
                        </Typography>

                        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Existential crises or questions about life's meaning
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Depression related to lack of purpose
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Anxiety about life transitions or major changes
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Grief and loss
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Chronic illness or disability
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Career or relationship challenges
                            </Typography>
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "black",
                                fontFamily: "lora",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                            }}
                        >
                            By helping individuals discover their unique meaning and purpose, logotherapy can lead to greater life satisfaction, improved mental health, and a deeper sense of fulfillment, even in the face of life's inevitable challenges.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default LogotherapyArticle; 