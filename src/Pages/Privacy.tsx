import { Box, Typography, Container, Paper } from "@mui/material";

const Privacy = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                pt: "7rem",
                pb: "3rem",
                background: "linear-gradient(135deg, #cbe3cd 0%, #f0f8f0 100%)",
                "&::before": {
                    content: '""',
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('images/home banner/water.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.1,
                    zIndex: -1,
                },
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        textAlign: "center",
                        color: "#093241",
                        fontFamily: "andika",
                        fontWeight: "600",
                        mb: 4,
                        fontSize: { xs: "2rem", md: "3rem" }
                    }}
                >
                    Privacy Policy
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
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
                        Your Privacy Matters
                    </Typography>

                    <Typography
                        sx={{
                            color: "#093241",
                            fontFamily: "cairo",
                            fontSize: "1.1rem",
                            lineHeight: 1.8,
                            mb: 4
                        }}
                    >
                        I am committed to protecting your privacy and ensuring the confidentiality of your personal information.
                        This privacy policy explains how I collect, use, and safeguard your information when you use this website
                        or engage in therapy services.
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            Information I Collect
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • Contact information (name, email, phone number) when you submit the contact form
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • Information you provide during therapy sessions
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            • Website usage data through cookies and analytics
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            How I Use Your Information
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • To respond to your inquiries and provide therapy services
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • To maintain professional records as required by law
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            • To improve website functionality and user experience
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            Confidentiality
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            All therapy sessions and communications are confidential, with the following exceptions:
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • If you pose a danger to yourself or others
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • If there is suspected abuse of a child or vulnerable adult
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            • If required by court order
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            Data Security
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            I implement appropriate security measures to protect your personal information from unauthorized
                            access, alteration, disclosure, or destruction. This includes secure communication protocols
                            and encrypted data storage.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            Your Rights
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            You have the right to:
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • Access your personal information
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6,
                                mb: 2
                            }}
                        >
                            • Request corrections to your information
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            • Request deletion of your information (subject to legal requirements)
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 2
                            }}
                        >
                            Contact Information
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                lineHeight: 1.6
                            }}
                        >
                            If you have any questions about this privacy policy or how I handle your information,
                            please contact me through the contact form on this website.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Privacy; 