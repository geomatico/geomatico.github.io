import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

const ProjectList = ({projects}) => {

  const [rowHeight, setRowHeight] = useState(200); // valor por defecto

  useEffect(() => {
    const calculateHeight = () => {
      const vh = window.innerHeight;
      const result = (vh - 64 - 45) / 3;
      setRowHeight(Math.round(result));
    };

    calculateHeight(); // inicial
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const widescreen = useMediaQuery('(min-width: 900px)');
  const imageContent = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    objectFit: 'cover',
    transition: 'transform .4s',
    '&:hover': {
      '& img': {
        transform: 'scale(1.3)',
        transformOrigin: '50% 50%',
      }
    }
  };

  return <ImageList cols={widescreen? 4 : 2} gap={widescreen? 10 : 6} sx={{margin: {xs: 1, md: 2}}} rowHeight={widescreen? rowHeight : 200}>
    {projects.map((project) => (
      <ImageListItem key={project.img}>
        <Box sx={imageContent}>
          <a href={project.url}>
            <img
              src={project.img}
              alt={project.title}
              width='100%'
              height='100%'
              style={{objectFit: 'cover', transition: 'transform .4s'}}
            />
          </a>
        </Box>
        <ImageListItemBar title={project.title} />
      </ImageListItem>
    ))}
  </ImageList>;
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;