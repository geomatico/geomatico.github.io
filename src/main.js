import ReactDOM from 'react-dom';
import React from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import blue from '@mui/material/colors/blue';

import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import LogoHorizontalNegativoLabs from './components/LogoHorizontalNegativoLabs';

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
    <LogoHorizontalNegativoLabs />
  </a>;

const App = () =>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <ResponsiveHeader logo={<GeomaticoIcon/>}/>
    <div>
      <div style={{...theme.mixins.toolbar}} />
      <ProjectList projects={CONFIG.projects} />
    </div>
  </ThemeProvider>;

const target = document.getElementById('app');
if (target) ReactDOM.render(<App />, target);
