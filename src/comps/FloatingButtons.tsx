import { Contacts, WhatsApp } from "@mui/icons-material";
import { Box, Fab, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FloatingButtons = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+15551234567";
    const message =
      "Hi! I'm interested in learning more about your logotherapy services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Contact Button */}
      <Tooltip title="Contact Us" placement="left">
        <Fab
          color="primary"
          onClick={() => navigate("/contact")}
          sx={{
            backgroundColor: "#093241",
            color: "white",
            "&:hover": {
              backgroundColor: "#1a4a5a",
            },
            width: 56,
            height: 56,
          }}
        >
          <Contacts />
        </Fab>
      </Tooltip>

      {/* WhatsApp Button */}
      <Tooltip title="WhatsApp" placement="left">
        <Fab
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            "&:hover": {
              backgroundColor: "#128C7E",
            },
            width: 56,
            height: 56,
          }}
        >
          <WhatsApp sx={{ fontSize: "1.9rem" }} />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingButtons;
