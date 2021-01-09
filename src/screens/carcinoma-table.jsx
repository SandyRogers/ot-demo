import { Get } from "react-axios";
import React from "react";
import { OpenTargetsTable } from "../components/ot-table";
import { FaMehRollingEyes, FaSpinner } from "react-icons/fa";

const CarcinomaTable = () => {
  const dataEndpoint = "https://demo6922545.mockable.io";

  return (
    <Get url={dataEndpoint}>
      {(error, response, isLoading) => {
        if (error) {
          return (
            <div>
              <FaMehRollingEyes />
              Couldn’t get data: {error}
            </div>
          );
        } else if (isLoading) {
          return (
            <div>
              <FaSpinner /> Loading...
            </div>
          );
        } else if (response !== null) {
          return <OpenTargetsTable targetData={response.data} limit={5} />;
        }
        return <></>;
      }}
    </Get>
  );
};

export default CarcinomaTable;
