import ReactDOM from 'react-dom';
import React from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import blue from '@mui/material/colors/blue';

import ResponsiveHeader from '@geomatico/geocomponents/dist/ResponsiveHeader';
import LogoHorizontalNegativo from '@geomatico/geocomponents/dist/LogoHorizontalNegativo';

import {CONFIG} from './config';
import ProjectList from './components/ProjectList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#973572',
      contrastText: '#fff',
    },
    secondary: {
      main: blue[500],
    }
  }
});

const GeomaticoIcon = () =>
  <a href='https://geomatico.es' target='_blank' rel='noreferrer'>
    <LogoHorizontalNegativo />
  </a>;

const App = () =>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <ResponsiveHeader title='labs@geomatico' logo={<GeomaticoIcon/>}/>
    <div>
      <div style={{...theme.mixins.toolbar}} />
      <ProjectList projects={CONFIG.projects} />
    </div>
  </ThemeProvider>;

const target = document.getElementById('app');
if (target) ReactDOM.render(<App />, target);
