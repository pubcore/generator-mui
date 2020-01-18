import {createMuiTheme} from '@material-ui/core/styles'

export default createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette:{
		type:'dark',
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