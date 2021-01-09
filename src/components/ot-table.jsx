import React from "react";
import { useExpanded, useTable } from "react-table";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import styled from "styled-components";
import { otTheme } from "../styles/theme";
import { OpenTargetsRadarChart } from "./ot-radar";
import { OpenTargetsBarChart } from "./ot-bar";
import { ChartTitle } from "./chart-utils";

const borderStyle = `1px solid #ddd`;

const TableHeadCell = styled.th`
  padding: 12px;
  font-weight: bold;
  font-size: 1.2em;
  border: ${borderStyle};
`;

const TableCell = styled.td`
  padding: 8px;
  border: ${borderStyle};
  background-color: ${(props) =>
    props.highlight ? otTheme.colors.blue050 : "inherit"};
`;

const ChartTableCell = styled(TableCell)`
  height: 100px;
  text-align: center;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const SingleBorderedTable = styled.table`
  border-collapse: collapse;
`;

export const ExpandableTable = ({ cols, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    visibleColumns,
    prepareRow,
  } = useTable(
    {
      columns: cols,
      data,
    },
    useExpanded
  );
  return (
    <SingleBorderedTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeadCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHeadCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <React.Fragment key={i}>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      highlight={row.isExpanded}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </tr>
              {row.isExpanded && (
                <tr>
                  <ChartTableCell colSpan={visibleColumns.length}>
                    <ChartTitle>Association score for each datatype</ChartTitle>
                    <ChartsContainer>
                      <OpenTargetsBarChart
                        data={row.original.association_score.datatypes}
                        geneSymbol={[row.original.target.gene_info.symbol]}
                      />
                      <OpenTargetsRadarChart
                        data={row.original.association_score.datatypes}
                        geneSymbol={[row.original.target.gene_info.symbol]}
                      />
                    </ChartsContainer>
                  </ChartTableCell>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </SingleBorderedTable>
  );
};

export const OpenTargetsTable = ({ targetData, limit = 5 }) => {
  const columns = React.useMemo(
    () => [
      {
        id: "expanders",
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          </span>
        ),
        Cell: ({ row }) => (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                color: otTheme.colors.blue500,
              },
            })}
          >
            {row.isExpanded ? <FaMinus /> : <FaPlus />}
          </span>
        ),
      },
      {
        Header: "Symbol",
        accessor: "target.gene_info.symbol",
      },
      {
        Header: "Gene ID",
        accessor: "target.id",
      },
      {
        Header: "Gene Name",
        accessor: "target.gene_info.name",
      },
      {
        Header: "Overall Association Score",
        accessor: "association_score.overall",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    let data = targetData.data;
    data.sort(
      (target1, target2) =>
        target2.association_score.overall - target1.association_score.overall
    );
    return data.slice(0, limit);
  }, [targetData, limit]);

  return <ExpandableTable cols={columns} data={data} />;
};
