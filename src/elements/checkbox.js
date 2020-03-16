import React, { Fragment } from "react";
import styled from "styled-components";
import colors from "../colors";
import { renderToStaticMarkup } from "react-dom/server";

const IconCheckmark = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill={"#fff"}
        d="M6.24,13.14a.52.52,0,0,0,.73,0l8.17-8.06a.36.36,0,0,0,0-.51L13.38,2.81a.36.36,0,0,0-.51,0L6.65,9,3.16,5.58a.36.36,0,0,0-.51,0L.9,7.34a.35.35,0,0,0,0,.5Z"
      />
    </svg>
  );
};

const StyledCheckbox = styled.input`
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;

  & + label {
    margin: 0;
    padding: 0 0 0 1.5em;
    position: relative;
    font-size: 15px;
    color: ${colors.gray_800};
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      display: block;
      width: 1em;
      height: 1em;
    }

    &:before {
      background: ${colors.gray_300};
      border: 1px solid ${colors.gray_500};
      box-sizing: border-box;
      border-radius: 2px;
    }

    &:after {
      z-index: 2;
      background-image: ${props => props.icon};
      background-size: 0.675em;
      background-repeat: no-repeat;
      background-position: center center;
      display: none;
    }
  }

  &:checked {
    & + label:before {
      background: ${colors.topaz};
      border-color: ${colors.topaz};
    }

    & + label:after {
      display: block;
    }
  }
`;

export default function Checkbox({
  id,
  value,
  onChange,
  disabled = false,
  label = "checkbox label",
  ...props
}) {
  const svgString = encodeURIComponent(renderToStaticMarkup(<IconCheckmark />));
  const iconDataUri = `url("data:image/svg+xml,${svgString}")`;

  return (
    <Fragment>
      <StyledCheckbox
        type="checkbox"
        id={id}
        onChange={onChange}
        icon={iconDataUri}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </Fragment>
  );
}
