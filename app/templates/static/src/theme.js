import {createMuiTheme} from '@material-ui/core/styles'
export const createTheme = ({darkMode}) => createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette:{
		type: darkMode ? 'dark' : 'light',
		primary:{
			main: darkMode ? '#ffb442' : '#e46300',
		},
		secondary:{
			main: darkMode ? '#ffb442' : '#e46300',
		}
	},
	props:{
		MuiButton:{
			variant:'outlined'
		}
	},
	overrides:{
		MuiTabs:{
			indicator:{
				backgroundColor:'red'
			}
		}
	}
})
