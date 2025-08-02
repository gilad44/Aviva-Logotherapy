import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Paper
} from "@mui/material";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            toast.success("Thank you for your message! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
            setLoading(false);
        }, 1000);
    };



    return (
        <>
            <Helmet>
                <title>Contact - Aviva Logotherapy</title>
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
                            fontFamily: "libre baskerville",
                            fontWeight: "600",
                            mb: 2,
                            fontSize: { xs: "2rem", md: "3rem" }
                        }}
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: "#093241",
                            fontFamily: "lora",
                            mb: 6,
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            opacity: 0.8,
                        }}
                    >
                        Ready to start your journey toward meaning and purpose? Let's connect.
                    </Typography>

                    {/* Contact Form */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            gap: 4,
                            maxWidth: "1200px",
                            mx: "auto",
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                flex: 1,
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                borderRadius: 3,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#093241",
                                    fontFamily: "libre baskerville",
                                    fontWeight: "600",
                                    mb: 3,
                                }}
                            >
                                Send a Message
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ mb: 3 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={loading}
                                    sx={{
                                        backgroundColor: "#093241",
                                        color: "white",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        py: 1.5,
                                        px: 4,
                                        "&:hover": {
                                            backgroundColor: "#1a4a5a",
                                        },
                                    }}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </Box>
                        </Paper>

                        {/* <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                            }}
                        >
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
                                    variant="h5"
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 3,
                                    }}
                                >
                                    Contact Information
                                </Typography>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "lora",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        📧 Email: aviva@logotherapy.com
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "lora",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        📱 Phone: 054-441-2966 - whatsapp only
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "lora",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        🕒 Available: 24/7
                                    </Typography>
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
                                    variant="h5"
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "libre baskerville",
                                        fontWeight: "600",
                                        mb: 3,
                                    }}
                                >
                                    What to Expect
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#093241",
                                        fontFamily: "lora",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    I typically respond within 24 hours. During our initial consultation,
                                    we'll discuss your needs and determine if logotherapy is the right
                                    approach for you. All sessions are confidential and conducted in a
                                    safe, supportive environment.
                                </Typography>
                            </Paper>
                        </Box> */}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Contact; 