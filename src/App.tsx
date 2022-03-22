/** @format */

import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({toggleColorMode: () => {}});

function App() {
   const theme = useTheme();
   const colorMode = React.useContext(ColorModeContext);

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
               Learn React
            </a>
            <br />
            <Box
               sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.default',
                  color: 'text.primary',
                  borderRadius: 1,
                  p: 3,
               }}>
               {theme.palette.mode} mode
               <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color='inherit'>
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
               </IconButton>
            </Box>
         </header>
      </div>
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
