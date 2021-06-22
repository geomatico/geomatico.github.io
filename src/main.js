import ReactDOM from 'react-dom';
import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {blue} from '@material-ui/core/colors';

import {ResponsiveHeader, LogoHorizontalNegativo} from '@geomatico/geocomponents';

import {CONFIG} from './config';
import ProjectList from './components/ProjectList';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#973572',
      contrastText: '#fff',
    },
    secondary: {
      main: blue[500],
    }
  }
});

const GeomaticoIcon = () => <>
  <a href='https://geomatico.es' target='_blank' rel='noreferrer'>
    <LogoHorizontalNegativo />
  </a>
</>;

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ResponsiveHeader title='labs@geomatico' logo={<GeomaticoIcon />}/>
      <div>
        <div style={{...theme.mixins.toolbar}} />
        <ProjectList projects={CONFIG.projects} />
      </div>
    </ThemeProvider>
  );
};

const target = document.getElementById('app');
if (target) ReactDOM.render(<App />, target);

export default App;