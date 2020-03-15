import React, { Fragment } from "react";
import { TextInput } from "../elements";

const StepOneContent = ({ campaignName, setCampaignName }) => {
  return (
    <Fragment>
      <h1>Name & Description</h1>
      <h2>What is the name of this pledge campaign?</h2>
      <p>
        Give this pledge campaign a descriptive name that answers the question
        "What are donors pledging to give to?" Your campaign name shouldn't end
        with the word "pledge".
      </p>

      <TextInput
        value={campaignName}
        onChange={e => setCampaignName(e.target.value)}
      />
    </Fragment>
  );
};

export default StepOneContent;
