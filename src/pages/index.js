import Header from "../components/header"
import Map from "../components/map"
import React from "react"
import { css } from "@emotion/core"

const Index = () => {
  return (
    <div>
      <Header />
      <Map position={[51.505, -0.09]} />
      <p>MetaProjection will be back for the next Canadian federal election.</p>
      <p>In the mean time, view our final projection for 2019 here:</p>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 1800px;
          margin: 0 auto;
          padding: 10px;
        `}
      >
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
              justify-content: space-between;
            }
          `}
        >
          <h2>Overview</h2>
          <ul>
            <li>
              4,488<p>Open Issues</p>
              <p>(-1 since yesterday)</p>
            </li>
            <li>
              80,564<p>Closed Issues</p>
              <p>(+37 since yesterday)</p>
            </li>
            <li>
              164<p>Open PRs</p>
              <p>(-1 since yesterday)</p>
            </li>
            <li>
              4,875<p>Merged PRs</p>
              <p>(+1 since yesterday)</p>
            </li>
            <li>
              1,826<p>Closed PRs</p>
              <p>(+2 since yesterday)</p>
            </li>
            <li>
              93,188<p>Stars</p>
              <p>(56 since yesterday)</p>
            </li>
          </ul>
        </section>
      </div>
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
}

export default Index
