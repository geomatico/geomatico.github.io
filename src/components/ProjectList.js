import React from 'react';
import PropTypes from 'prop-types';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

const ProjectList = ({projects}) => {
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

  return <ImageList cols={widescreen? 3 : 2} gap={widescreen? 10 : 4} sx={{margin: {xs: 0, md: 4}}}>
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