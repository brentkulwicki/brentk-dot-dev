module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "brentk dot dev",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-144053653-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
