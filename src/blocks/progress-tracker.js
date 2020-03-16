import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Checkmark from "../assets/checkmark";

const ProgressTrackerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1em 0;
`;

const ProgressBar = styled.div`
  display: block;
  width: ${props => props.width}px;
  height: 5px;
  position: absolute;
  top: ${props => props.dotSize / 2}px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${colors.gray_500};
  z-index: 0;

  div {
    position: absolute;
    height: 100%;
    width: ${props => props.progress}%;
    background: ${colors.gray_600};
    transition: 0.5s ease all;
  }
`;

const ProgressSteps = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  padding: 0 ${props => props.dotSpacing}px;
`;

const StepMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${props => props.dotSize}px;
  font-size: 14px;
  position: relative;
  margin: 0 ${props => props.dotSpacing}px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const StepMarkerDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.dotSize}px;
  height: ${props => props.dotSize}px;
  border-radius: ${props => props.dotSize}px;
  background: ${props => (props.active ? colors.emerald : colors.gray_500)};
  color: ${props => (props.active ? "#fff" : colors.gray_600)};
  font-size: ${props => props.dotSize / 2}px;
  transition: 0.2s ease all 0.25s;
`;

const StepMarkerLabel = styled.div`
  position: relative;
  color: ${props => (props.active ? colors.gray_800 : colors.gray_500)};
  font-size: 12px;
  max-width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export default function ProgressTracker({
  currentStep,
  steps,
  dotSize = 28,
  dotSpacing = 32
}) {
  const lineWidth = steps.length * dotSize + steps.length * dotSpacing * 1.25;
  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <ProgressTrackerContainer>
      <ProgressBar width={lineWidth} dotSize={dotSize} progress={progress}>
        <div />
      </ProgressBar>
      <ProgressSteps dotSpacing={dotSpacing}>
        {steps.map((step, index) => {
          return (
            <StepMarker key={index} dotSize={dotSize} dotSpacing={dotSpacing}>
              <StepMarkerDot active={index === currentStep} dotSize={dotSize}>
                {currentStep < index + 1 ? (
                  index + 1
                ) : (
                  <Checkmark fill={colors.gray_600} size={dotSize / 2} />
                )}
              </StepMarkerDot>
              <StepMarkerLabel active={index === currentStep}>
                {step}
              </StepMarkerLabel>
            </StepMarker>
          );
        })}
      </ProgressSteps>
    </ProgressTrackerContainer>
  );
}
