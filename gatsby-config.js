const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Coronavirus stats",
    source: "https://coronaviruseurope.org/",
    repoNameWithOwner: "Coronavirus",
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
