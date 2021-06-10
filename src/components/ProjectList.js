import React from 'react';
import PropTypes from 'prop-types';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridList from '@material-ui/core/GridList';
import {makeStyles} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';


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
  },
  
}));

const ProjectList = ({projects}) => {
  const widescreen = useMediaQuery('(min-width: 770px)');
  const classes = useStyles({widescreen});
  
  return(
    <GridList cellHeight={350} className={classes.gridList}>
      {projects.map((project) => (
        <GridListTile key={project.img}>
          <a href={project.url}>
            <img src={project.img} alt={project.title} className={classes.image}/>
          </a>
          <GridListTileBar
            title={project.title}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
