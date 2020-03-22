import React from "react"
import { css } from "@emotion/core"
import { useTable } from "react-table"

export default function Table({ data }) {
  const columns = [
    {
      Header: "Info",
      columns: [
        {
          Header: "Country",
          accessor: "countryName",
        },
        {
          Header: "Confirmed",
          accessor: "confirmed",
        },
        {
          Header: "Deaths",
          accessor: "deaths",
        },
        {
          Header: "Recovered",
          accessor: "recovered",
        },
      ],
    },
  ]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <div
      css={css`
        padding: 1rem;
        display: flex;
        justify-content: center;
        table {
          border-spacing: 0;
          border: 1px solid black;

          tr {
            :last-child {
              td {
                border-bottom: 0;
              }
            }
          }

          th,
          td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
              border-right: 0;
            }
          }
        }
      `}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => {
            if (i !== 0) {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              )
            } else {
              return null
            }
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
