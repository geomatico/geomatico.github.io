import React from 'react';
import PropTypes from 'prop-types';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles(() => ({
  imageContent: {
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
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform .4s',
  },
}));

const ProjectList = ({projects}) => {
  const widescreen = useMediaQuery('(min-width: 900px)');
  const classes = useStyles({widescreen});

  return <ImageList cols={widescreen? 3 : 2} gap={widescreen? 20 : 0} sx={{margin: {xs: 0, md: 4}}}>
    {projects.map((project) => (
      <ImageListItem key={project.img}>
        <div className={classes.imageContent}>
          <a href={project.url}>
            <img
              src={project.img}
              alt={project.title}
              className={classes.image}
              loading="lazy"
            />
          </a>
        </div>
        <ImageListItemBar title={project.title} />
      </ImageListItem>
    ))}
  </ImageList>;
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;