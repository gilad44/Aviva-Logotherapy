import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    imagePath: string;
  } | null>(null);

  const certificates = [
    {
      title: "CALEA",
      imagePath: "/certificates/Aviva Gros Margalit_Certficate CALEA.jpg",
    },
    {
      title: "Advanced Logotherapy ",
      imagePath: "/certificates/Aviva_Advanced_email_docusign.jpg",
    },
    {
      title: "Coaching",
      imagePath: "/certificates/COACHING CERTIFICATE copy.jpg",
    },
    {
      title: "Intro to Logotherapy ",
      imagePath: "/certificates/Complete_with_DocuSign_Aviva_Intro_edit.jpg",
    },
    {
      title: "Reiki ",
      imagePath: "/certificates/REIKI CERTIFICATE copy_page-0001.jpg",
    },
    {
      title: "Psychotherapist ",
      imagePath: "/certificates/Aviva Gros Margalit psychotherapy.jpg",
    },
    {
      title: "Criminal Psychology ",
      imagePath: "/certificates/Criminal Psychology.jpg",
    },
    {
      title: "Neuroplasticity",
      imagePath: "/certificates/Udemy Neuroplacsticity.jpg",
    },
  ];

  const handleCertClick = (cert: { title: string; imagePath: string }) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        pt: { xs: 12, md: 16 },
        px: { xs: 2, sm: 4, md: 6 },
        pb: 8,
        "&::before": {
          width: "175%",
          height: "120%",
          content: '""',
          position: "fixed",
          top: 0,
          left: -550,
          right: 0,
          bottom: 0,
          backgroundImage: "url('images/home banner/Untitled design.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "libre baskerville",
              color: "white",
              WebkitTextStroke: "0.009rem black",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Professional Certificates
          </Typography>
        </Box>

        {/* Certificates Wall */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
            justifyItems: "center",
          }}
        >
          {certificates.map((cert, index) => (
            <Box
              key={index}
              onClick={() => handleCertClick(cert)}
              sx={{
                width: "80%",
                height: "80%",
                maxWidth: "25rem",
                maxHeight: "20rem",
                aspectRatio: "3/4",
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              <img
                src={cert.imagePath}
                alt={cert.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  p: 2,
                  transform: "translateY(100%)",
                  transition: "transform 0.3s ease",
                  ".MuiBox-root:hover &": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "libre baskerville",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {cert.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Full Size Modal */}
        <Modal
          open={!!selectedCert}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "40vw",
              maxWidth: "90vw",
              maxHeight: "90vh",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              overflow: "hidden",
              pt: 1.5,
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.9)",
                },
              }}
            >
              <Close />
            </IconButton>

            {/* Full Size Image */}
            {selectedCert && (
              <>
                <img
                  src={selectedCert.imagePath}
                  alt={selectedCert.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                {/* Title */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: "white",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "libre baskerville",
                      color: "#303e78ff",
                    }}
                  >
                    {selectedCert.title}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Certificates;
