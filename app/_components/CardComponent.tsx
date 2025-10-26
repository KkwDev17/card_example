"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Styles from "./Style.module.css";
import React from "react";


// 🔹 Reutilizamos Alert dentro del Snackbar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CardComponentTypes = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  url?: string;
};

export default function CardComponent({
  id,
  name,
  price,
  description,
  category,
  url,
}: CardComponentTypes) {
  // Estado para el Snackbar
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight: 500 }} className={Styles.card}>
        <CardActionArea>
          <div>
            <span className={`${Styles.badge1} ${Styles.popular}`}>
              <FavoriteBorderIcon style={{ color: "#2D5F3F" }} />
            </span>

            <CardMedia
              component="img"
              height="140"
              image={url}
              alt={name}
              style={{ maxWidth: 400, maxHeight: 200 }}
            />

            <span className={`${Styles.badge} ${Styles.popular}`}>Popular</span>
          </div>

          <CardContent className={Styles["card-body"]}>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              style={{ fontWeight: 700, color: "#A8BC8E" }}
            >
              {category}
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontWeight: 700, color: "#2D5F3F" }}
            >
              {name}
            </Typography>

            <Typography variant="body2" className={Styles["card-description"]}>
              {description}
            </Typography>

            <Typography
              variant="h5"
              style={{
                fontWeight: 700,
                color: "#2D5F3F",
              }}
            >
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={Styles["card-footer"]}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2D5F3F" }}
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </Button>

          <Button
            variant="outlined"
            style={{ borderBlockColor: "#2D5F3F", color: "#2D5F3F" }}
          >
            Ver más
          </Button>
        </CardActions>
      </Card>

      {/* 🔹 Snackbar flotante (toast) */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
           Producto agregado al carrito
        </Alert>
      </Snackbar>
    </>
  );
}
