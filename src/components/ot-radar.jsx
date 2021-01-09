import { Radar } from "@nivo/radar";
import React from "react";
import { otTheme } from "../styles/theme";
import { ChartHolder, useAssociationChartData } from "./chart-utils";

export const OpenTargetsRadarChart = ({ data, geneSymbol }) => {
  const chartData = useAssociationChartData(data, geneSymbol);
  return (
    <ChartHolder>
      <Radar
        data={chartData}
        width={400}
        height={320}
        keys={[geneSymbol]}
        indexBy={"datatype"}
        maxValue={1}
        margin={{ top: 10, right: 100, bottom: 10, left: 100 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={8}
        enableDots={true}
        dotSize={6}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color" }}
        enableDotLabel={false}
        colors={otTheme.colors.blue700}
        fillOpacity={0.25}
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
      />
    </ChartHolder>
  );
};
