import React, { useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import { renderToStaticMarkup } from "react-dom/server";

const IconDownChevron = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 640 640"
      enable-background="new 0 0 640 640"
    >
      <path
        fill={fill}
        d="M504.9,252.1l-45.2-45.2c-2.1-2.1-5.6-2.1-7.8,0L320,338.7L188.1,206.9c-2.1-2.1-5.6-2.1-7.8,0l-45.2,45.2
	c-2.1,2.1-2.1,5.6,0,7.8l181,181c1,1,2.4,1.6,3.9,1.6s2.9-0.6,3.9-1.6l181-181c1-1,1.6-2.4,1.6-3.9
	C506.5,254.6,505.9,253.1,504.9,252.1z"
      />
    </svg>
  );
};

const StyledSelect = styled.select`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.gray_700};
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${colors.gray_600};
  box-shadow: 0 1px 0 1px ${colors.gray_20};
  border-radius: 4px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${colors.gray_50};
  background-image: ${props => props.icon};
  background-position: calc(100% - 0.75em) center;
  background-size: 20px;
  background-repeat: no-repeat;
  cursor: pointer;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    border-color: ${colors.gray_700};
  }

  &:focus {
    border-color: ${colors.gray_800};
    box-shadow: 0 0 4px ${colors.topaz};
    box-shadow: 0 0 4px -moz-mac-focusring;
    color: ${colors.gray_800};
    outline: none;
  }

  option {
    font-weight: normal;
  }

  &:disabled,
  &[aria-disabled="true"] {
    color: ${colors.gray_500};
    border-color: ${colors.gray_500};
    background-color: ${colors.gray_200};
    cursor: not-allowed;
  }
`;

export default function Select({
  options,
  onChange,
  value = "",
  disabled = false,
  placeholder = "Select..."
}) {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const svgString = encodeURIComponent(
    renderToStaticMarkup(
      <IconDownChevron
        fill={`${disabled ? colors.gray_500 : colors.gray_800}`}
      />
    )
  );
  const iconDataUri = `url("data:image/svg+xml,${svgString}")`;

  return (
    <StyledSelect
      onChange={e => {
        onChange(e);
        setShowPlaceholder(false);
      }}
      disabled={disabled}
      icon={iconDataUri}
    >
      {showPlaceholder && <option value="">{placeholder}</option>}
      {options.map(option => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </StyledSelect>
  );
}
