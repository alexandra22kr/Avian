import { createMuiTheme } from "@material-ui/core/styles";
import indigo from '@material-ui/core/colors/indigo';
import { dark } from "@material-ui/core/styles/createPalette";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[900]
        }
    }
});

export default theme;
