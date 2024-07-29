import { createTheme } from '@mui/material/styles';

// Crie um tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul do Material UI
    },
    secondary: {
      main: '#dc004e', // Vermelho do Material UI
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
