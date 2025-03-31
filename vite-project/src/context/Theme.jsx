import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: '"Orbitron", sans-serif',
    },
    button: {
        fontFamily: '"Orbitron", sans-serif', 
      },
  },

  palette: {
    mode: 'dark', 
    primary: {
      main: '#1976d2', 
    },
  },
});
export default theme;
