module.exports = {
  siteMetadata: {
    title: `Samuel Rozé`,
    description: `VP of Engineering at Birdie. Public speaker & open-source maintainer.`,
    author: `@sroze`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://www.rssmix.com/u/12574667/rss.xml`,
        name: `MyArticles`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
