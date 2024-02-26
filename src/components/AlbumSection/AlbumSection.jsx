import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AlbumCard from "../Card/AlbumCard";
import styles from "./AlbumSection.module.css";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

const SongsTabComponent = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <Tabs value={selectedGenre} onChange={onGenreChange} textColor='White' TabIndicatorProps={{
      style: {
        backgroundColor: "#34c94b"
      }
    }}>
       <Tab  label={"All"} value={"all"} />
      {genres.map((genre, index) => (
        <Tab key={index} label={genre.label} value={genre.key} />
      ))}
    </Tabs>
  );
};
const AlbumSection = ({ title, apiUrl = "https://qtify-backend-labs.crio.do/albums/top",type }) => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [genres,setGenres] = useState([]);
  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };
  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTopAlbums(response.data);
        setFilteredAlbums(response.data);
      } catch (error) {
        console.error("Error fetching top albums:", error);
      }
    };
    
    fetchTopAlbums();
    const fetchGenres= async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGenres(response.data.data);
      } catch (error) {
        console.error("Error fetching Genres:", error);
      }
    };
    if(type==="song"){
      fetchGenres();
    }
  }, []);

  const filterAlbums = (genre) => {
    if (genre === "all") {
      return topAlbums;
    } else {
      return topAlbums.filter((album) => album.genre.key === genre);
    }
  };
  useEffect(() => {
    setFilteredAlbums(filterAlbums(selectedGenre));
  }, [selectedGenre]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  

  return (
    <div className={styles.AlbumSection} >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        {type!=="song"&&
        <Button onClick={handleCollapse} color="primary" sx={{ color: "#34C94B" }}>
          {isCollapsed ? "Show All" : "Collapse"}
        </Button>
        }
      </Stack>
      {
        type==="song"&&
        <SongsTabComponent genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange}/>

      }
      <Collapse in={!isCollapsed}>
        <Grid container spacing={2} sx={{}}>
          {filteredAlbums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={3} lg={2}>
              <AlbumCard data={album} />
            </Grid>
          ))}
        </Grid>
      </Collapse>
      <Collapse in={isCollapsed}>
        <Carousel
          Items={filteredAlbums.map((album) => (
            <div key={album.id} style = {{}}>
              <AlbumCard data={album} type={type}/>

            </div>
          ))}
        />
      </Collapse>
    </div>
  );
};

export default AlbumSection;
