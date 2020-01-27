import {createMuiTheme} from '@material-ui/core/styles'

export default ({darkMode}) => createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette:{
		type: darkMode ? 'dark' : 'light',
		primary:{
			main:'#a7db98'
		},
		secondary:{
			main:'#9af0f0'
		}
	},
	props:{
		MuiButton:{
			variant:'outlined'
		}
	}
})