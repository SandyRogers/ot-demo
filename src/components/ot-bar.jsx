import { Bar } from "@nivo/bar";
import React from "react";
import { otTheme } from "../styles/theme";
import { ChartHolder, useAssociationChartData } from "./chart-utils";

export const OpenTargetsBarChart = ({ data, geneSymbol }) => {
  const chartData = useAssociationChartData(data, geneSymbol);
  return (
    <ChartHolder>
      <Bar
        data={chartData}
        width={400}
        height={320}
        keys={[geneSymbol]}
        indexBy={"datatype"}
        maxValue={1}
        margin={{ top: 10, right: 10, bottom: 100, left: 30 }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendPosition: "middle",
          legendOffset: 20,
        }}
        colors={otTheme.colors.blue600}
        enableLabel={false}
        gridYValues={[0.2, 0.4, 0.6, 0.8, 1.0]}
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
      />
    </ChartHolder>
  );
};
