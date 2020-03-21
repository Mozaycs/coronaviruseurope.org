import { CircleMarker, Map, Popup, TileLayer } from "react-leaflet"
import { StaticQuery, graphql } from "gatsby"

import FindDistrict from "./findDistrict"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const state = {
  lat: 52,
  lng: -95,
  zoom: 13,
}

const DistrictMap = ({ selectedDistrict }) => {
  const mapHeightStyle = `
  @media (max-width: 700px) {
  height: 280px;
}
  @media (min-width: 701px) {
  height: 350px;
}
  `

  const isSelected = false

  const position = [state.lat, state.lng]
  return (
    <StaticQuery
      query={graphql`
        {
          allRestApiV2Locations {
            edges {
              node {
                id
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
        return (
          <>
            <div
              css={css`
                overflow: hidden;
                > * {
                  ${mapHeightStyle}
                  width: 100%;
                }
              `}
            >
              <Map
                center={position}
                zoom={state.zoom}
                bounds={[[40.84, -135.79], [60.06, -49.75]]}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {edges[0].node.locations.map(item => (
                  <CircleMarker
                    key={item.id}
                    stroke={isSelected ? true : false}
                    fillOpacity={isSelected ? 0.8 : 1}
                    color="#D71921"
                    center={[
                      item.coordinates.latitude,
                      item.coordinates.longitude,
                    ]}
                    radius={isSelected ? 10 : 6}
                    onMouseOver={e => {
                      e.target.openPopup()
                      if (!isSelected) {
                        // prefetchPathname(`/riding/${district.slug}`)
                      }
                    }}
                    onMouseOut={e => {
                      e.target.closePopup()
                    }}
                    onClick={() => console.log("clicked")}
                  >
                    <Popup>
                      <strong>Riding</strong>: {item.country}
                      <br />
                      <strong>Winner</strong>: <br />
                      <strong>Confidence</strong>:{" "}
                    </Popup>
                  </CircleMarker>
                ))}
              </Map>
              <FindDistrict
                counties={edges[0].node.locations}
                // selectedDistrict={selectedDistrict}
              />
            </div>
          </>
        )
      }}
    />
  )
}

DistrictMap.propTypes = {
  selectedDistrict: PropTypes.number,
}

DistrictMap.defaultProps = {
  siteTitle: null,
}

export default DistrictMap
