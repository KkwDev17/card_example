"use client";

import { useState, forwardRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Email, Phone, LocationOn, Language } from "@mui/icons-material";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CardComponent() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => console.log("Redirigiendo a formulario..."), 2000);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #2D5F3F 0%, #F1F8E9 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 380,
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(0,0,0,0.15)",
          background: "#FAFAFA",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Encabezado tipo banner circular */}
        <Box
          sx={{
            position: "relative",
            height: 150,
            background:
              "linear-gradient(135deg, #2E7D32 0%, #A5D6A7 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src="/logo.jpg"
            alt="Reuse Market"
            sx={{
              width: 100,
              height: 100,
              border: "4px solid #FAFAFA",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              position: "absolute",
              bottom: -50,
              backgroundColor: "#fff",
            }}
          />
        </Box>

        {/* Contenido principal */}
        <CardContent sx={{ mt: 7, px: 3, pb: 4, textAlign: "center" }}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            Reuse Market
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, fontStyle: "italic" }}
          >
            Revolucionando la forma en que reutilizamos 🌱
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
            sx={{ mb: 3 }}
          >
            Somos una empresa comprometida con el medio ambiente. En Reuse Market 
            impulsamos la economía circular ofreciendo una plataforma donde cada 
            producto puede tener una segunda vida útil.
          </Typography>

          {/* Chips informativos */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            <Chip
              icon={<Email sx={{ color: "#2E7D32 !important" }} />}
              label="contacto@reusemarket.com"
              sx={{ bgcolor: "#E8F5E9", color: "#2D5F3F", fontSize: 12 }}
            />
            <Chip
              icon={<Phone sx={{ color: "#2D5F3F !important" }} />}
              label="+52 55 1234 5678"
              sx={{ bgcolor: "#E8F5E9", color: "#2D5F3F", fontSize: 12 }}
            />
            <Chip
              icon={<LocationOn sx={{ color: "#2D5F3F !important" }} />}
              label="CDMX, México"
              sx={{ bgcolor: "#E8F5E9", color: "#1B5E20", fontSize: 12 }}
            />
            <Chip
              icon={<Language sx={{ color: "#2D5F3F !important" }} />}
              label="www.reusemarket.com"
              sx={{ bgcolor: "#E8F5E9", color: "#1B5E20", fontSize: 12 }}
            />
          </Stack>

          {/* Botón de acción */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
            sx={{
              borderRadius: 50,
              py: 1.3,
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: "none",
              background:
                "linear-gradient(135deg,#2D5F3F 0%, #81C784 100%)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
              },
            }}
          >
            Enviar mensaje
          </Button>
        </CardContent>
      </Card>

      {/* Alerta tipo Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Redirigiendo al formulario...
        </Alert>
      </Snackbar>
    </Box>
  );
}
