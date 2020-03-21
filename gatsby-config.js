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
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://coronavirus-tracker-api.herokuapp.com/v2/locations",
        ],
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "INSERT_HERE_YOUR_CONSUMER_KEY",
          consumer_secret: "INSERT_HERE_YOUR_CONSUMER_SECRET",
          bearer_token: "INSERT_HERE_YOUR_BEARER_TOKEN",
        },
        queries: {
          nameofthequery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "coronavirus",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          nameofanotherthequery: {
            endpoint: "search/tweets",
            params: {
              q: "#coronavirus",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
