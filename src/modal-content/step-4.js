import React, { Fragment, useState } from "react";
import { TextInput, Checkbox } from "../elements";

const StepFourContent = ({ goal, setGoal }) => {
  const [goalEnabled, setGoalEnabled] = useState(false);

  const toggleGoalEnabled = () => {
    if (goalEnabled) {
      setGoalEnabled(false);
      setGoal("");
    } else {
      setGoalEnabled(true);
    }
  };

  return (
    <Fragment>
      <h1>Campaign Goal (optional)</h1>
      <h2>Does this campaign have a goal?</h2>
      <p>
        If you're asking donors to make pledges for the purpose of reaching a
        known, organization-wide goal, enter that goal here. During the donation
        period of this campaign, the running total of donations will be tracked
        against this number.
      </p>

      <p>
        <em>
          Note: This is a goal for donations received – not the total amount of
          pledges.
        </em>
      </p>

      <Checkbox
        id="enableGoal"
        label="Enable Campaign Goal?"
        onChange={toggleGoalEnabled}
      />

      <TextInput
        onChange={e => setGoal(e.target.value)}
        value={goalEnabled ? goal : ""}
        disabled={!goalEnabled}
        style={{ marginTop: 8 }}
      />
    </Fragment>
  );
};

export default StepFourContent;
