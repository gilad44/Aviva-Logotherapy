import { useState } from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    Paper
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Helmet } from "react-helmet";

const FAQ = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            question: "What to expect in a session?",
            answer: "In a logotherapy session, we'll explore your personal values, beliefs, and what gives your life meaning. Sessions typically last 50-60 minutes and involve open dialogue, reflection exercises, and practical strategies for finding purpose. The approach is collaborative and respectful of your unique journey."
        },
        {
            question: "Who is logotherapy for?",
            answer: "Logotherapy is for anyone seeking deeper meaning in life, dealing with existential questions, or facing challenges that make them question their purpose. It's particularly helpful for those experiencing anxiety, depression, grief, life transitions, or a sense of emptiness despite material success."
        },
        {
            question: "Is logotherapy faith-based?",
            answer: "While logotherapy was developed by Viktor Frankl, a Holocaust survivor, it's not tied to any specific religion. It focuses on finding meaning through personal values, relationships, work, and how we respond to suffering. People of all faiths and those without religious beliefs can benefit from this approach."
        },
        {
            question: "What insurance/payment methods do you accept?",
            answer: "I accept various payment methods including credit cards, bank transfers, and cash. While I don't directly bill insurance, I can provide documentation for you to submit to your insurance provider for potential reimbursement. Please contact me to discuss specific payment arrangements and sliding scale options."
        },
        {
            question: "How long does therapy typically take?",
            answer: "The duration varies based on individual needs and goals. Some people find significant relief in 8-12 sessions, while others may benefit from longer-term work. We'll regularly assess progress and adjust the treatment plan accordingly."
        },
        {
            question: "Do you offer online sessions?",
            answer: "Yes, I offer secure online sessions via video platform. Online therapy has been shown to be just as effective as in-person sessions and offers the convenience of accessing care from anywhere. All sessions maintain the same level of confidentiality and professionalism."
        },
        {
            question: "What makes logotherapy different from other therapies?",
            answer: "Logotherapy focuses specifically on finding meaning and purpose, rather than just symptom relief. It emphasizes our capacity to choose our attitude toward suffering and to find meaning even in difficult circumstances. This approach often leads to deeper, more lasting change."
        },
        {
            question: "How do I know if logotherapy is right for me?",
            answer: "If you're asking questions about life's meaning, feeling stuck despite having material comforts, or seeking deeper understanding of your purpose, logotherapy might be a good fit. The best way to know is to schedule a free consultation where we can discuss your specific needs."
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQ - Aviva Logotherapy</title>
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
                <Container maxWidth="md">
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
                        Frequently Asked Questions
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: "#093241",
                            fontFamily: "cairo",
                            mb: 6,
                            maxWidth: "600px",
                            mx: "auto",
                            fontSize: { xs: "1.1rem", md: "1.3rem" }
                        }}
                    >
                        Common questions about logotherapy and what to expect from our work together
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
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    background: "transparent",
                                    "&:before": {
                                        display: "none",
                                    },
                                    "&:not(:last-child)": {
                                        borderBottom: "1px solid rgba(9, 50, 65, 0.1)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: "#093241" }} />}
                                    sx={{
                                        "& .MuiAccordionSummary-content": {
                                            margin: "16px 0",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "andika",
                                            fontWeight: "600",
                                            fontSize: { xs: "1rem", md: "1.1rem" }
                                        }}
                                    >
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        sx={{
                                            color: "#093241",
                                            fontFamily: "cairo",
                                            lineHeight: 1.6,
                                            fontSize: "1rem"
                                        }}
                                    >
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Paper>

                    <Box sx={{ textAlign: "center", mt: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#093241",
                                fontFamily: "andika",
                                fontWeight: "600",
                                mb: 3
                            }}
                        >
                            Still Have Questions?
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1.1rem",
                                mb: 3
                            }}
                        >
                            I'm here to help you understand how logotherapy can support your journey.
                        </Typography>
                        <Typography
                            sx={{
                                color: "#093241",
                                fontFamily: "cairo",
                                fontSize: "1rem"
                            }}
                        >
                            Feel free to reach out for a free consultation to discuss your specific needs.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default FAQ; 