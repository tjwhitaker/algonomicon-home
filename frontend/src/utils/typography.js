import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1, h2": {
    borderBottom: 0,
  },
})

const typography = new Typography(githubTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
