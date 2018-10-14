module.exports = {
  siteMetadata: {
    title: 'Alex Sparrow',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'alex-sparrow',
        short_name: 'sparrow',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bird.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
  pathPrefix: "/portfolio",
}
