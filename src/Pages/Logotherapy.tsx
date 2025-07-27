import { Box, Typography, Container, Paper } from "@mui/material";
import { Helmet } from "react-helmet";

const Logotherapy = () => {

    const principles = [
        {
            title: "Freedom of Will",
            description: "We always have the freedom to choose our attitude toward any given set of circumstances, even in the most difficult situations. This freedom cannot be taken away from us.",
            icon: "🕊️"
        },
        {
            title: "Will to Meaning",
            description: "The primary human drive is not pleasure (as Freud suggested) or power (as Adler suggested), but the search for meaning. We are motivated by finding purpose in our lives.",
            icon: "🎯"
        },
        {
            title: "Meaning in Suffering",
            description: "Even in suffering, we can find meaning. When we cannot change a situation, we are challenged to change ourselves. Suffering can become meaningful when we choose how to respond to it.",
            icon: "🌱"
        }
    ];

    const differences = [
        {
            aspect: "Focus",
            logotherapy: "Finding meaning and purpose in life",
            otherTherapies: "Symptom relief and behavior change"
        },
        {
            aspect: "Approach",
            logotherapy: "Meaning-centered, existential",
            otherTherapies: "Problem-focused, diagnostic"
        },
        {
            aspect: "Goal",
            logotherapy: "Discovering personal values and life purpose",
            otherTherapies: "Reducing symptoms and improving functioning"
        },
        {
            aspect: "View of\nSuffering",
            logotherapy: "Potential source of meaning and growth",
            otherTherapies: "Problem to be eliminated or managed"
        }
    ];

    return (
        <>
            <Helmet>
                <title>What is Logotherapy - Aviva Logotherapy</title>
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
                        What is Logotherapy?
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
                        A meaning-centered approach to therapy developed by Viktor Frankl that helps
                        individuals find purpose and meaning in their lives, even in the face of suffering.
                    </Typography>

                    {/* Introduction Section */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 6,
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 3
                            }}
                        >
                            Understanding Logotherapy
                        </Typography>

                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3
                            }}
                        >
                            Logotherapy, derived from the Greek word "logos" meaning "meaning," is a therapeutic approach
                            that focuses on helping individuals discover and pursue their unique life purpose. Developed by
                            Dr. Viktor Frankl, a Holocaust survivor and psychiatrist, this method is based on the belief
                            that our primary drive is not pleasure or power, but the search for meaning.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1.1rem",
                                lineHeight: 1.8
                            }}
                        >
                            Unlike traditional therapies that focus primarily on symptom relief, logotherapy helps people
                            find meaning in their experiences, including suffering, and empowers them to choose their
                            attitude toward life's challenges. This approach often leads to deeper, more lasting change
                            and a greater sense of fulfillment.
                        </Typography>
                    </Paper>

                    {/* Core Principles */}
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            color: "#093241",
                            fontFamily: "andika",
                            fontWeight: "600",
                            mb: 4,
                            fontSize: { xs: "1.8rem", md: "2.5rem" }
                        }}
                    >
                        Core Principles
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        mb: 6,
                        justifyContent: "space-between"
                    }}>
                        {principles.map((principle, index) => (
                            <Box key={index} sx={{
                                width: { xs: "100%", md: "calc(33.333% - 16px)" },
                                minWidth: { xs: "100%", md: "calc(33.333% - 16px)" }
                            }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        background: "rgba(255, 255, 255, 0.9)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: 3,
                                        textAlign: "center",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "3rem",
                                            mb: 2
                                        }}
                                    >
                                        {principle.icon}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "andika",
                                            fontWeight: "600",
                                            mb: 2
                                        }}
                                    >
                                        {principle.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "cairo",
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {principle.description}
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>

                    {/* How Logotherapy Works */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 6,
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 3
                            }}
                        >
                            How Logotherapy Works
                        </Typography>

                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3
                            }}
                        >
                            In logotherapy sessions, we work together to explore your personal values, beliefs, and what
                            gives your life meaning. Through guided reflection, we identify the unique ways you can find
                            purpose in your current circumstances, including through:
                        </Typography>

                        <Box component="ul" sx={{ pl: 3 }}>
                            <li>
                                <Typography
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "cairo",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8
                                    }}
                                >
                                    <strong>Creative values:</strong> What you can give to the world through your work, art, or actions
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "cairo",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8
                                    }}
                                >
                                    <strong>Experiential values:</strong> What you can receive from the world through relationships, nature, and experiences
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "cairo",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8
                                    }}
                                >
                                    <strong>Attitudinal values:</strong> How you choose to respond to unavoidable suffering
                                </Typography>
                            </li>
                        </Box>
                    </Paper>

                    {/* Differences from Other Therapies */}
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            color: "#093241",
                            fontFamily: "andika",
                            fontWeight: "600",
                            mb: 4,
                            fontSize: { xs: "1.8rem", md: "2.5rem" }
                        }}
                    >
                        How Logotherapy Differs
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                            overflow: "hidden"
                        }}
                    >
                        <Box sx={{ p: 3, background: "#093241", color: "white" }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "andika",
                                    fontWeight: "600",
                                    textAlign: "center"
                                }}
                            >
                                Comparison with Traditional Therapies
                            </Typography>
                        </Box>

                        <Box sx={{ p: 3 }}>
                            {differences.map((diff, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: { xs: "flex-start", md: "center" },
                                        py: 2,
                                        borderBottom: index < differences.length - 1 ? "1px solid rgba(9, 50, 65, 0.1)" : "none"
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "andika",
                                            fontWeight: "600",
                                            minWidth: { xs: "auto", md: "150px" },
                                            mb: { xs: 1, md: 0 },
                                            whiteSpace: "pre-line"
                                        }}
                                    >
                                        {diff.aspect}:
                                    </Typography>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    color: "#093241",
                                                    fontFamily: "cairo",
                                                    fontWeight: "600",
                                                    fontSize: "0.9rem"
                                                }}
                                            >
                                                Logotherapy:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#093241",
                                                    fontFamily: "cairo"
                                                }}
                                            >
                                                {diff.logotherapy}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    color: "#093241",
                                                    fontFamily: "cairo",
                                                    fontWeight: "600",
                                                    fontSize: "0.9rem"
                                                }}
                                            >
                                                Other Therapies:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#093241",
                                                    fontFamily: "cairo"
                                                }}
                                            >
                                                {diff.otherTherapies}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>

                    {/* Call to Action */}
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
                            Ready to Discover Your Meaning?
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1.1rem",
                                maxWidth: "600px",
                                mx: "auto",
                                lineHeight: 1.6
                            }}
                        >
                            If you're seeking deeper meaning in your life or struggling with existential questions,
                            logotherapy might be the right approach for you. Let's explore together how this
                            meaning-centered therapy can help you find purpose and fulfillment.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Logotherapy; 