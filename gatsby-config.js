const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby Stats",
    source: "https://github.com/lannonbr/gatsby-github-stats",
    repoNameWithOwner: "gatsbyjs/gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-leaflet`,
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://coronavirus-tracker-api.herokuapp.com/v2/locations",
        ],
      },
    },
  ],
}
