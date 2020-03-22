const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Coronavirus stats",
    source: "https://coronaviruseurope.org/",
    owner: {
      name: "KernAdler",
      source: "https://www.kernadler.com",
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
      {
        name: "Mozayc",
        twitter: "mozayc",
      },
    ],
  },
  plugins: [`gatsby-plugin-emotion`, `gatsby-plugin-react-leaflet`],
}
