import React, { useEffect, useState } from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import { css } from "@emotion/core"
import { graphql } from "gatsby"

const Aboutus = props => {
  const [timeStamp, setTimeStamp] = useState(new Date())
  const config = props.data.site.siteMetadata

  return (
    <div>
      <Header />

      <div
        css={css`
          dispay: flex;
        `}
      >
        <h2>Latest Updates </h2>
        <ul>
          {" "}
          <li>
            {" "}
            After nearly 2 months, Wuhan (the epicenter of the pandemic in
            China) announced today that it would be loosening the lockdown by
            gradually resuming public transportation and allowing healthy people
            to go back to work.
            <a href="https://www.reuters.com/article/us-health-coronavirus-china/china-scrambles-to-curb-rise-in-imported-coronavirus-cases-wuhan-eases-lockdown-idUSKBN21903C">
              [source]
            </a>
          </li>
          <li>
            China had put Wuhan and other cities into lockdown on Jan. 23 when a
            total of 25 deaths had been reported in the country.
          </li>
          <li>
            After about 3 weeks of lockdown, the number of new deaths reached
            its peak in China [see graphs] and then began declining.
          </li>
          <li>
            Italy went into a similar lockdown on March 11, when 827 deaths had
            already been reported, and 8 days after reaching 79 deaths (March 3)
            [see graphs] and 19 days after the beginning of the outbreak in the
            country (Feb. 21) [see archived news]
          </li>
          <li>
            On Feb. 22, Italy had become the country with the highest number of
            cases among all non-Asian nations. [see archived news] When China
            reached a similar number of deaths (811 deaths on Feb. 8) the
            lockdown had already been implemented for 2 weeks.
          </li>
          <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">
            [source]
          </a>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <h1> Useful info:</h1>
        <ul>
          <li>
            <a href="https://www.worldometers.info/coronavirus/coronavirus-symptoms/">
              Symptoms
            </a>
          </li>
          <li>
            <a href="https://www.worldometers.info/coronavirus/coronavirus-incubation-period/">
              Incubation Period
            </a>
          </li>
          <li>
            <a href="https://www.worldometers.info/coronavirus/coronavirus-death-rate/">
              Mortality Rate
            </a>
          </li>
          <li>
            <a href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">
              Age, Sex, and existing conditions of Deaths
            </a>
          </li>
        </ul>
      </div>

      <Footer
        contributers={config.contributers}
        owner={config.owner}
        publishTimestamp={timeStamp}
      />
    </div>
  )
}

export default Aboutus

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
