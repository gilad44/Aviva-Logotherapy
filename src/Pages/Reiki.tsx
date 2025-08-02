import { Box, Typography, Container, Paper } from "@mui/material";
import { Helmet } from "react-helmet";

const Reiki = () => {
    return (
        <>
            <Helmet>
                <title>Reiki - Energy Healing Therapy</title>
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
                        Reiki Energy Healing
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
                        Ancient Japanese Healing Art for Mind, Body, and Spirit
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
                            What is Reiki?
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
                            Reiki (pronounced "ray-key") is a Japanese energy healing technique that promotes healing and balance in the mind, body, and spirit. The word "Reiki" comes from the Japanese words "rei" (universal) and "ki" (life energy), meaning "universal life energy." This gentle, non-invasive healing method works by channeling positive energy through the practitioner's hands to the recipient.
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
                            Developed by Dr. Mikao Usui in the early 20th century, Reiki is based on the understanding that life energy flows through all living things. When this energy is low or blocked, we are more likely to experience stress, illness, or emotional imbalance. Reiki helps to restore the natural flow of energy, promoting healing and well-being.
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
                            How Reiki Works
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
                                    Energy Channeling
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
                                    The Reiki practitioner acts as a channel for universal life energy, allowing this healing energy to flow through their hands to the recipient. The energy is intelligent and goes where it is most needed in the body.
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
                                    Chakra Balancing
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
                                    Reiki works with the body's energy centers (chakras) to remove blockages and restore balance. Each chakra is associated with different aspects of physical, emotional, and spiritual health.
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
                                    Self-Healing Activation
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
                                    Reiki activates the body's natural healing abilities, supporting the immune system and promoting physical, emotional, and spiritual healing processes.
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
                            What to Expect During a Reiki Session
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
                            A typical Reiki session lasts 60-90 minutes and is conducted in a peaceful, comfortable environment. You remain fully clothed and can lie on a massage table or sit in a chair, whichever is more comfortable for you.
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
                                    The Experience
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
                                    The practitioner gently places their hands on or near your body in specific positions, allowing the healing energy to flow. You may feel warmth, tingling, or a sense of deep relaxation. Many people experience a meditative state or fall into a light sleep.
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
                                    After the Session
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
                                    You may feel deeply relaxed, energized, or experience a sense of emotional release. It's important to drink plenty of water and take time to integrate the healing experience. The effects of Reiki can continue for several days after the session.
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
                            Benefits of Reiki
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
                            Reiki can provide numerous benefits for physical, emotional, and spiritual well-being:
                        </Typography>

                        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Deep relaxation and stress reduction
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Pain relief and management
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Improved sleep quality
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Enhanced immune system function
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Emotional healing and balance
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Accelerated recovery from illness or surgery
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Spiritual growth and awareness
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Support for addiction recovery
                            </Typography>
                            <Typography component="li" sx={{ color: "black", fontFamily: "lora", fontSize: "1.1rem", lineHeight: 1.8, mb: 1 }}>
                                Complementary therapy for chronic conditions
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
                            Reiki is a safe, gentle, and effective healing modality that can be used alongside conventional medical treatments. It promotes overall well-being and can be particularly beneficial for those seeking natural, holistic approaches to health and healing.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default Reiki; 