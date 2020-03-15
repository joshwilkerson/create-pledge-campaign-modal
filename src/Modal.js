import React, { useState, Fragment } from "react";
import ProgressTracker from "./elements/progress-tracker";
import formatDate from "format-date";

import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalWrapper,
  SuccessMessage,
  Box
} from "./elements";

import StepOneContent from "./modal-content/step-1";
import StepTwoContent from "./modal-content/step-2";
import StepThreeContent from "./modal-content/step-3";
import StepFourContent from "./modal-content/step-4";

export default function Modal() {
  const steps = [
    "Name & Description",
    "Donation Period",
    "Target Fund",
    "Goal (optional)"
  ];
  const totalSteps = steps.length;

  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const [campaignName, setCampaignName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fund, setFund] = useState("");
  const [goal, setGoal] = useState("");

  const handleIncreaseStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      return null;
    }
  };

  const handleDecreaseStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowSuccess(false);
    } else {
      return null;
    }
  };

  const resetSteps = () => {
    setCurrentStep(0);
    setShowSuccess(false);
    setFund("");
    setStartDate(null);
    setEndDate(null);
    setCampaignName("");
  };

  const handleSave = () => {
    setShowSuccess(true);
  };

  const getStepContent = currentStep => {
    switch (currentStep) {
      case 0:
        return (
          <StepOneContent
            campaignName={campaignName}
            setCampaignName={setCampaignName}
          />
        );
      case 1:
        return (
          <StepTwoContent
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        );
      case 2:
        return <StepThreeContent fund={fund} setFund={setFund} />;
      case 3:
        return <StepFourContent goal={goal} setGoal={setGoal} />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <ModalWrapper>
        <ModalHeader title="Create New Pledge Campaign" />

        <ProgressTracker currentStep={currentStep} steps={steps} />

        <ModalBody>
          {getStepContent(currentStep)}

          {showSuccess && (
            <Box theme="success">
              <h2>You're done!</h2>
            </Box>
          )}
        </ModalBody>

        <ModalFooter
          handleIncreaseStep={handleIncreaseStep}
          handleDecreaseStep={handleDecreaseStep}
          resetSteps={resetSteps}
          handleSave={handleSave}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </ModalWrapper>
      <div style={{ padding: 20 }}>
        <div>current step: {currentStep + 1}</div>
        <div>campaign name: {campaignName}</div>
        <div>
          campaign start date:{" "}
          {startDate !== null && formatDate("{month}/{day}/{year}", startDate)}
        </div>
        <div>
          campaign end date:{" "}
          {endDate !== null && formatDate("{month}/{day}/{year}", endDate)}
        </div>
        <div>fund: {fund}</div>
        <div>goal: {goal}</div>
      </div>
    </Fragment>
  );
}
