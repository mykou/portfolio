import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    color: `#1ca086`   
  }
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography