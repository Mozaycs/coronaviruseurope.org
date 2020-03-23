import { CircleMarker, Map, Marker, Popup, TileLayer } from "react-leaflet"
import React, { useEffect, useState } from "react"

import PropTypes from "prop-types"
import { css } from "@emotion/core"

const state = {
  lat: 52,
  lng: -95,
  zoom: 3,
}

const DistrictMap = ({ locations }) => {
  const mapHeightStyle = `
  @media (max-width: 700px) {
  height: 280px;
}
  @media (min-width: 701px) {
  height: 450px;
}
`
  const [position, setPosition] = useState([state.lat, state.lng])

  useEffect(() => {
    geolocate()
  })

  const geolocationApiAvailable = () => {
    try {
      return (
        navigator &&
        navigator.geolocation &&
        navigator.geolocation.getCurrentPosition
      )
    } catch (e) {
      return false
    }
  }

  const geolocate = () => {
    if (geolocationApiAvailable()) {
      navigator.geolocation.getCurrentPosition(pos => {
        const userLocation = [pos.coords.latitude, pos.coords.longitude]
        setPosition(userLocation)
      })
    }
  }

  const isSelected = false

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
        <Map center={position} zoom={state.zoom}>
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
        {/*<FindCountry
          counties={countries}
          selectedDistrict={selectedDistrict}
        /> */}
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
