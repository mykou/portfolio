import Typography from "typography"
import theme from "typography-theme-moraga"

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    color: `#1ca086`   
  },
  'a': {
    color: `#1ca086`,
  	backgroundImage: `none`
  },
  'html' : {
  	font: `175%/1.45 'Quattrocento Sans',sans-serif`
  },
  '@media only screen and (max-width:480px)':{
  	'html' : {
  		font: `115%/1.45 'Quattrocento Sans',sans-serif`
  	}
  },
  '@media only screen and (max-width:768px) and (min-width: 480px)':{
  	'html' : {
  		font: `125%/1.45 'Quattrocento Sans',sans-serif`
  	}
  },
  '@media only screen and (max-width:1024px) and (min-width: 768px)':{
  	'html' : {
  		font: `135%/1.45 'Quattrocento Sans',sans-serif`
  	}
  },
  '@media only screen and (max-width:1440px) and (min-width: 1024px)':{
  	'html' : {
  		font: `145%/1.45 'Quattrocento Sans',sans-serif`
  	}
  }
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography