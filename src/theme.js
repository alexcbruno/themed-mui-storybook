import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ea1b3d"
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 18
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, 
      },
    },
  },
})