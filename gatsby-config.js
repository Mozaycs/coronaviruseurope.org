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
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-162018035-1",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-162018035-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}
