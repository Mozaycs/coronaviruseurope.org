import { CircleMarker, Map, Marker, Popup, TileLayer } from "react-leaflet"

import FindCountry from "./findCountry"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const state = {
  lat: 52,
  lng: -95,
  zoom: 13,
}

const DistrictMap = ({ locations }) => {
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
          <Marker position={position} />
          {locations.map(item => (
            <CircleMarker
              key={item.id}
              stroke={isSelected ? true : false}
              fillOpacity={isSelected ? 0.8 : 1}
              color="#D71921"
              center={[item.coordinates.latitude, item.coordinates.longitude]}
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
                <strong>Country</strong>: {item.country}
                <br />
                <strong>Confirmed</strong>:{item.latest.confirmed} <br />
                <strong>Recovered</strong>:{item.latest.recovered} <br />
                <strong>Deaths</strong>:{item.latest.deaths}
              </Popup>
            </CircleMarker>
          ))}
        </Map>
        <FindCountry
          counties={locations}
          // selectedDistrict={selectedDistrict}
        />
      </div>
    </>
  )
}

DistrictMap.propTypes = {
  selectedDistrict: PropTypes.number,
}

DistrictMap.defaultProps = {
  siteTitle: null,
}

export default DistrictMap
