import React from 'react';
import PropTypes from 'prop-types';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles(() => ({
  gridList: {
    margin: '0 auto!important',
    height: '100%',
    width: ({widescreen}) => widescreen ? '50vw' : '100%'
  },
  image: {
    width: ({widescreen}) => widescreen ? '25vw' : '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform .4s',
    '&:hover': {
      transform: 'scale(1.3)',
      transformOrigin: '50% 50%'
    }
  }
}));

const ProjectList = ({projects}) => {
  const widescreen = useMediaQuery('(min-width: 770px)');
  const classes = useStyles({widescreen});

  return <ImageList cellHeight={350} className={classes.gridList}>
    {projects.map((project) => (
      <ImageListItem key={project.img}>
        <a href={project.url}>
          <img src={project.img} alt={project.title} className={classes.image}/>
        </a>
        <ImageListItemBar
          title={project.title}
        />
      </ImageListItem>
    ))}
  </ImageList>;
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
