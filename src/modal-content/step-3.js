import React, { Fragment } from "react";
import { Select, Box } from "../elements";

const StepThreeContent = ({ fund, setFund }) => {
  const options = [
    { value: "general", label: "General" },
    { value: "missions", label: "Missions" },
    { value: "new-building", label: "New Building" },
    { value: "joshs-new-car", label: "Josh's New Car" }
  ];

  return (
    <Fragment>
      <h1>Target Fund</h1>
      <h2>Which fund is tied to this pledge campaign?</h2>
      <p>
        Donations made to this fund will count towards a donor's pledge to this
        campaign. It's important to communicate to your donors that donations
        made to only this specific fund will count towards their pledge goal.
      </p>
      <Select
        options={options}
        onChange={e => setFund(e.target.value)}
        value={fund}
        placeholder="Choose Fund..."
      />

      {fund === "general" && (
        <Box theme="error">
          <p>
            You've selected your non-restricted, default fund. Only donations to
            this specific fund will count towards pledges a donor's pledge goal.
            This selection is most appropriate for general budgetary campaigns
            where you want to know how much unrestricted money your donors
            promise to give over a period of time.
          </p>
        </Box>
      )}
    </Fragment>
  );
};

export default StepThreeContent;
