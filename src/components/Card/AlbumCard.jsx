import React from "react";
import styles from "./Card.module.css";
import LogoImage from "../../assets/logo.png";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const AlbumCard = ({ imageUrl, albumName, follows }) => {
  return (
    <Paper sx={{ backgroundColor: "#121212", padding: 1, color: "#FFFFFF" }} elevation={0}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia component="img" height={200} image={imageUrl} alt={albumName} />

        <CardActionArea>
          <Chip label={`${follows} Follows`} sx={{ marginTop: 1, marginBottom: 1, marginLeft: 1, backgroundColor: "#121212", color: "#FFFFFF" }} />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" component="div">
        {albumName}
      </Typography>
    </Paper>
  );
};

export default AlbumCard;
