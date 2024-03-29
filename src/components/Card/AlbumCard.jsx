import React from "react";
import styles from "./Card.module.css";
import LogoImage from "../../assets/logo.png";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

const AlbumCard = ({ data,type}) => {
  return (
    <Tooltip title={type!="song"?`${data.songs?.length} Songs`:''} placement="top" >
      <Paper sx={{ backgroundColor: "#121212", padding: 1, color: "#FFFFFF" }} elevation={0}>
        <Card sx={{ borderRadius: "10px" }}>
          <CardMedia component="img" height={200} image={data.image} alt={data.title} />

          <CardActionArea>
            <Chip label={type==="song"?`${data.likes} Likes`:`${data.follows} Follows`} sx={{ marginTop: 1, marginBottom: 1, marginLeft: 1, backgroundColor: "#121212", color: "#FFFFFF" }} />
          </CardActionArea>
        </Card>
        <Typography variant="subtitle1" component="div">
          {data.title}
        </Typography>
      </Paper>
    </Tooltip>
  );
};

export default AlbumCard;
