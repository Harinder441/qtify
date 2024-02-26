import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AlbumCard from '../Card/AlbumCard'; 
import styles from "./AlbumSection.module.css";

const AlbumSection = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setTopAlbums(response.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.AlbumSection} >
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
        Top Albums
      </Typography>
        <Button onClick={handleCollapse} color="primary" sx={{color:"#34C94B"}}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
    </Stack>

      <Collapse in={!isCollapsed}>
        <Grid container spacing={2} sx={{}}>
          {topAlbums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={3} lg={2}>
              <AlbumCard
                imageUrl={album.image}
                follows={album.follows}
                albumName={album.title}
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </div>
  );
};

export default AlbumSection;
