import React, { useEffect, useState } from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import Map from "../components/map"
import Overview from "../components/overview"
import Table from "../components/table"
import { css } from "@emotion/core"
import { graphql } from "gatsby"

const Index = props => {
  const [loading, setLoading] = useState(true)
  const [timeStamp, setTimeStamp] = useState(new Date())
  const [country, setCountry] = useState([])
  const [mapData, setMapData] = useState([])
  const config = props.data.site.siteMetadata
  useEffect(() => {
    Promise.all([
      fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations").then(
        res => res.json()
      ),
      fetch("https://api.coronatracker.com/v2/analytics/country").then(res =>
        res.json()
      ),
    ]).then(([mapData, country]) => {
      setCountry(country)
      setMapData(mapData)
      setTimeStamp(new Date())
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <Header />
      {!loading && (
        <Map position={[51.505, -0.09]} locations={mapData.locations} />
      )}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 1800px;
          margin: 0 auto;
          padding: 10px;
        `}
      >
        <Overview {...mapData.latest} />
      </div>
      {!loading && <Table data={country} />}
      <Footer
        contributers={config.contributers}
        owner={config.owner}
        publishTimestamp={timeStamp}
      />
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        source
        owner {
          name
          source
        }
        contributers {
          name
          twitter
        }
      }
    }
  }
`
