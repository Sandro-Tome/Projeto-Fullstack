import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: secondColor
    },
    secondary: {
      main: secondColor,
    },
  },
});

export default theme