/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Refrigeracao_Marques`,
    siteUrl: `https://www.refrigeracaomarques.com`,
    description: `Assistência técnica. Conserto em lavadora, lava e seca, micro-ondas, refrigeradores, ar condicionado, adega e outros. Instalação de ar condicionado. Higienização de lava e seca.`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Refrigeração Marques`,
        short_name: `RM`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0775ce`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0775ce`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },

    //para criar o pwa
    `gatsby-plugin-offline`,
  ],
}
