import React, { Fragment } from "react";
import { TextInput, Textarea } from "../elements";

const StepOneContent = ({
  campaignName,
  setCampaignName,
  campaignDescription,
  setCampaignDescription
}) => {
  return (
    <Fragment>
      <h1>Name & Description</h1>
      <div style={{ marginBottom: "1em" }}>
        <h2>What is the name of this pledge campaign?</h2>
        <p>
          Give this pledge campaign a descriptive name that answers the question
          "What are donors pledging to give to?" Your campaign name shouldn't
          end with the word "pledge".
        </p>

        <TextInput
          value={campaignName}
          onChange={e => setCampaignName(e.target.value)}
        />
      </div>

      <div>
        <h2>Campaign Description</h2>
        <p>Add a description to your campaign for admins and donors.</p>
      </div>
      <Textarea
        value={campaignDescription}
        onChange={e => setCampaignDescription(e.target.value)}
      />
    </Fragment>
  );
};

export default StepOneContent;
