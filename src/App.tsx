/** @format */

import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const ColorModeContext = React.createContext({toggleColorMode: () => {}});

function App() {
   return (
      <div className='App'>
         <DenseAppBar />
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
               Learn React
            </a>
         </header>
      </div>
   );
}

function DenseAppBar() {
   const theme = useTheme();
   const colorMode = React.useContext(ColorModeContext);

   return (
      <Box sx={{flexGrow: 1}}>
         <AppBar position='static'>
            <Toolbar variant='dense'>
               <IconButton edge='start' color='inherit' aria-label='menu' sx={{mr: 2}}>
                  <MenuIcon />
               </IconButton>
               <Typography variant='h6' color='inherit' component='div'>
                  MasterChef Brasil
               </Typography>
               <Box sx={{flexGrow: 1}} />
               <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color='inherit'>
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
               </IconButton>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

function AppContainer() {
   const [mode, setMode] = React.useState<'light' | 'dark'>('light');
   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
         },
      }),
      []
   );

   const theme = React.useMemo(
      () =>
         createTheme({
            palette: {
               mode,
            },
         }),
      [mode]
   );

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default AppContainer;
