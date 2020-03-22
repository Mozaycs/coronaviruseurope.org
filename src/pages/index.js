import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Map from "../components/map"
import Overview from "../components/overview"
import React from "react"
import Table from "../components/table"
import { css } from "@emotion/core"

const Index = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allRestApiV2Locations {
            edges {
              node {
                latest {
                  confirmed
                  deaths
                  recovered
                }
                locations {
                  id
                  coordinates {
                    latitude
                    longitude
                  }
                  country
                  country_code
                  last_updated
                  latest {
                    confirmed
                    deaths
                    recovered
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allRestApiV2Locations: { edges } }) => {
        const data = edges[0].node
        const tableData = data.locations.map(item => {
          return {
            confirmed: item.latest.confirmed,
            deaths: item.latest.deaths,
            recovered: item.latest.recovered,
            country: item.country,
          }
        })
        return (
          <div>
            <Header />
            <Map position={[51.505, -0.09]} locations={data.locations} />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                max-width: 1800px;
                margin: 0 auto;
                padding: 10px;
              `}
            >
              <Overview {...data.latest} />
            </div>
            <Table data={tableData} />
            <a
              href={"https://coronaviruseurope.org"}
              css={css`
                height: 2rem;
                border-radius: 2rem;
                border: none;
                background-color: #950451;
                color: white;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: 0 1rem;
                text-shadow: none;
              `}
            >
              Coronaviruseurope.org
            </a>
          </div>
        )
      }}
    />
  )
}

export default Index
