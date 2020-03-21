import { Map, Marker, Popup, TileLayer } from "react-leaflet"

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
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
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
