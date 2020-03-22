const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Coronavirus stats",
    source: "https://coronaviruseurope.org/",
    owner: {
      name: "Mozayc",
      source: "http://www.mozayc.net/",
    },
    contributers: [
      {
        name: "Darshan Kumar",
        twitter: "darshaneldorado",
      },
      {
        name: "Krunal Patel",
        twitter: "kprocks07",
      },
    ],
  },
  plugins: [`gatsby-plugin-emotion`, `gatsby-plugin-react-leaflet`],
}
