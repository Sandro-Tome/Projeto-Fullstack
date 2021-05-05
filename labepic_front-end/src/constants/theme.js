import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondColor, terciaryColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: secondColor
    },
    secondary: {
      main: secondColor,
    },
    terciary: {
      main: terciaryColor,
    },
  },
});

export default theme