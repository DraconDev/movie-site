import {  grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

//? Theme for the entire project
const MuiTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#111111",
		},
		secondary: {
			main: grey[200],
		},
	},
});

export default MuiTheme;
