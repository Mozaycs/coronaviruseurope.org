import { ClassNames, css } from "@emotion/core"
import React, { useState } from "react"

import { IoMdPin } from "react-icons/io"
import { MdErrorOutline } from "react-icons/md"
import PropTypes from "prop-types"
import Select from "react-select"
import { navigate } from "gatsby"

const FindCountry = ({ counties }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const options = counties.map(d => ({
    value: d.countryCode,
    label: d.countryName,
  }))
  const handleChange = option => {
    navigate(`/riding/${option.value}`)
    setSelectedOption(option)
  }

  return (
    <div
      css={css`
        width: 100%;
        background-color: white;
        padding: 0.5rem 0;
        margin-bottom: 1.2rem;
        border-top: 1px solid #eee;
        font-size: 0.9rem;
        box-shadow: 0px 1px 2px 0px rgba(40, 40, 40, 0.1);
      `}
    >
      <div
        className="contentWrapper"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 5%;
          @media (max-width: 650px) {
            > * {
              width: 100%;
              padding: 0.3rem 0;
              text-align: center;
            }
            padding: 0.3rem 0.6rem;
            flex-wrap: wrap;
          }
          @media (min-width: 650px) {
            > * {
              max-width: 40%;
            }
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
          }
          > * {
            flex-grow: 1;
            min-width: 10rem;
          }
        `}
      >
        <div>
          <div
            css={css`
              color: #950451;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <IoMdPin />
            &nbsp;Your Location
          </div>
        </div>
        <div>
          {/*Hide except for screenreaders*/}
          <label
            htmlFor="districtSelect"
            css={css`
              border: 0;
              clip: rect(0 0 0 0);
              clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
              -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
              white-space: nowrap;
            `}
          >
            Select Country
          </label>
          <ClassNames>
            {({ css: style }) => (
              <Select
                isSearchable
                inputId="districtSelect"
                className={style`
                width: 100%;
                font-size: 0.8rem;
                [class$="placeholder"] {
                  color: #444;
                }
              `}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder="Select Country"
              />
            )}
          </ClassNames>
        </div>
      </div>
    </div>
  )
}

FindCountry.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object),
}

export default FindCountry
