module.exports = {
  siteMetadata: {
    siteUrl: 'https://algonomicon.com'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '51bo9zth',
        dataset: 'production',
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    }
  ],
}