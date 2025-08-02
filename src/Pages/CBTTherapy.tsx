import { Box, Typography, Container, Paper } from "@mui/material";
import { Helmet } from "react-helmet";

const CBTTherapy = () => {
    return (
        <>
            <Helmet>
                <title>CBT Therapy - Cognitive Behavioral Therapy</title>
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
                        background: "rgba(255, 255, 255, 0.7)",
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
                        Cognitive Behavioral Therapy (CBT)
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
                        Understanding the Connection Between Thoughts, Feelings, and Behavior
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
                                fontFamily: "libre baskerville",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            What is CBT?
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
                            Cognitive Behavioral Therapy (CBT) is a structured, time-limited, evidence-based psychotherapy approach that focuses on the relationship between thoughts, feelings, and behaviors. It is based on the understanding that our thoughts influence our emotions and actions, and that by changing our thinking patterns, we can improve our emotional well-being and behavior.
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
                            Developed by Dr. Aaron Beck in the 1960s, CBT has become one of the most widely researched and effective forms of psychotherapy, with strong evidence supporting its effectiveness for a variety of mental health conditions.
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
                                fontFamily: "libre baskerville",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            Core Principles of CBT
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    1. The Cognitive Model
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
                                    CBT is based on the cognitive model, which suggests that our thoughts about a situation influence our emotional and behavioral responses. By identifying and challenging unhelpful thoughts, we can change how we feel and behave.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    2. Collaborative Approach
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
                                    CBT is a collaborative therapy where the therapist and client work together as a team. The therapist provides guidance and teaches skills, while the client actively participates in their own treatment.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    3. Goal-Oriented and Structured
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
                                    CBT is goal-oriented and structured, with specific techniques and homework assignments designed to help clients develop new skills and coping strategies.
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
                                fontFamily: "libre baskerville",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            Common CBT Techniques
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    Cognitive Restructuring
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
                                    Identifying and challenging negative or distorted thoughts, replacing them with more balanced and realistic thinking patterns.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    Behavioral Activation
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
                                    Increasing engagement in positive activities to improve mood and reduce symptoms of depression.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    Exposure Therapy
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
                                    Gradually facing feared situations or objects to reduce anxiety and phobias through systematic desensitization.
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "black",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 2,
                                    }}
                                >
                                    Mindfulness and Relaxation
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
                                    Learning techniques to stay present in the moment and manage stress through breathing exercises and meditation.
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
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "black",
                                fontFamily: "libre baskerville",
                                fontWeight: "600",
                                mb: 3,
                            }}
                        >
                            Conditions Treated with CBT
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
                            CBT has been extensively researched and is effective for treating:
                        </Typography>

                        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Depression and mood disorders
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Anxiety disorders (generalized anxiety, panic disorder, social anxiety)
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Obsessive-Compulsive Disorder (OCD)
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Post-Traumatic Stress Disorder (PTSD)
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Eating disorders
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Insomnia and sleep problems
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Chronic pain and medical conditions
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Relationship and communication issues
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
                            CBT is typically a short-term therapy, with most people seeing significant improvement in 12-20 sessions. The skills learned in CBT provide lasting tools that clients can use throughout their lives to manage challenges and maintain mental well-being.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default CBTTherapy; 