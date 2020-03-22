import React from "react"
import { css } from "@emotion/core"
import { formatDistanceToNow } from "date-fns"

const Footer = ({ publishTimestamp, contributers = [], owner }) => {
  const generatedAgo = formatDistanceToNow(publishTimestamp)
  return (
    <footer
      className="footer"
      css={css`
        width: 100%;
        margin-top: 3.5rem;
        border-top: 1px solid #eee;
        padding: 1rem;
        background-color: white;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
        className="contentWrapper"
      >
        <span
          css={css`
            a {
              margin-left: 5px;
            }
            span {
              margin-left: 5px;
            }
          `}
        >
          Made by{" "}
          {contributers.map(item => (
            <a
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${item.twitter}`}
            >
              {item.name}
            </a>
          ))}
          <span>at</span>
          <a target="_blank" rel="noopener noreferrer" href={owner.source}>
            {owner.name}
          </a>
        </span>
        {typeof window !== "undefined" ? (
          <span>Last updated {generatedAgo} ago</span>
        ) : (
          <span />
        )}
      </div>
    </footer>
  )
}

export default Footer
