import React from "react";
import styled from "styled-components";
import colors from "../colors";
import { Button, InlineConfirmButton } from "../elements";

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid ${colors.gray_300};
  padding: 1em 1.25em;
  border-radius: 0 0 4px 4px;
`;

export default function ModalFooter({
  handleIncreaseStep,
  handleDecreaseStep,
  resetSteps,
  handleSave,
  currentStep,
  totalSteps
}) {
  return (
    <StyledModalFooter>
      <InlineConfirmButton
        onClick={resetSteps}
        disabled={currentStep === 0}
        text="Cancel"
        confirmText="Are you sure?"
        confirmOptions={["yes", "no"]}
      />
      <div>
        <Button
          onClick={handleDecreaseStep}
          style={{ marginRight: 8 }}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={
            currentStep !== totalSteps - 1 ? handleIncreaseStep : handleSave
          }
          hightlighted={currentStep === totalSteps - 1}
        >
          {currentStep !== totalSteps - 1 ? "Next" : "Create Campaign"}
        </Button>
      </div>
    </StyledModalFooter>
  );
}
