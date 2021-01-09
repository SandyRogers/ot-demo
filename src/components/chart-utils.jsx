import styled from "styled-components";
import { otTheme } from "../styles/theme";
import { useMemo } from "react";

export const ChartTitle = styled.h1`
  font-size: 1em;
  color: ${otTheme.colors.blue900};
`;
export const ChartHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const useAssociationChartData = (associationData, geneSymbol) => {
  return useMemo(() => {
    return Object.entries(associationData).map((association) => ({
      datatype: association[0],
      [geneSymbol]: association[1],
    }));
  }, [associationData, geneSymbol]);
};
