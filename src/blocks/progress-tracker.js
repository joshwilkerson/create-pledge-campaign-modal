import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import Checkmark from '../assets/checkmark'

const ProgressTrackerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0;
`

const ProgressBar = styled.div`
  display: block;
  width: calc(100% - ${props => props.dotSize}px - 1rem);
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
    background: ${colors.emerald};
    transition: 0.25s ease all 0.05s;
  }
`

const ProgressSteps = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
`

const StepMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${props => props.dotSize + 24}px;
  font-size: 14px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const StepMarkerDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.dotSize}px;
  height: ${props => props.dotSize}px;
  border-radius: ${props => props.dotSize}px;
  background: ${props => (props.completed ? colors.emerald : colors.gray_500)};
  color: ${props => (props.active ? '#fff' : colors.gray_600)};
  font-size: ${props => props.dotSize / 2}px;
  transition: 0.1s ease all;
`

const StepMarkerLabel = styled.div`
  position: relative;
  color: ${props => (props.active ? colors.gray_800 : colors.gray_600)};
  font-size: 12px;
  max-width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`

export default function ProgressTracker({
  currentStep,
  steps,
  dotSize = 28,
  ...restProps
}) {
  const progress = (currentStep / (steps.length - 1)) * 100

  return (
    <ProgressTrackerContainer {...restProps}>
      <ProgressBar dotSize={dotSize} progress={progress}>
        <div />
      </ProgressBar>
      <ProgressSteps>
        {steps.map((step, index) => {
          return (
            <StepMarker key={index} dotSize={dotSize}>
              <StepMarkerDot
                active={index === currentStep}
                completed={currentStep > index - 1}
                dotSize={dotSize}
              >
                {currentStep < index + 1 ? (
                  index + 1
                ) : (
                  <Checkmark fill="#fff" size={dotSize / 2} />
                )}
              </StepMarkerDot>
              <StepMarkerLabel active={index === currentStep}>
                {step}
              </StepMarkerLabel>
            </StepMarker>
          )
        })}
      </ProgressSteps>
    </ProgressTrackerContainer>
  )
}
