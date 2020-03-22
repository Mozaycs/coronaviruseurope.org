import React from 'react'
import { css } from "@emotion/core"

export default function Overview({ confirmed, deaths, recovered }) {
    return (
        <section
        css={css`
          background: #fff;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          box-sizing: border-box;
          min-width: 100%;
          ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;
          }
        `}
      >
        <h2>Overview Global</h2>
        <ul>
          <li>
            <p>Confirmed</p>
            <p>{confirmed} </p>
          </li>
          <li>
            <p>Recoveries</p>
            <p> {recovered} </p>
          </li>
          <li>
            <p>Deaths</p>
            <p> {deaths} </p>
          </li>
        </ul>
      </section>
    )
}
