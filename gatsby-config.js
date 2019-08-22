/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),        
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Liu`,
        short_name: `Michael Liu`,
        start_url: `/`,        
        icon: `src/images/logo.png`,
        display: `standalone`        
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
