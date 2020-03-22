import React from "react";
import styled from "styled-components";
import { ButtonThemes } from "./button-theme";

const StyledButton = styled.button`
  display: inline-flex;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border: 1px solid
    ${props => (props.outline ? props.theme.border : props.theme.background)};
  padding: 0.65em 0.75em;
  line-height: 1;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
  font-size: 0.9em;
  overflow: hidden;
  transition: 0.2s ease background-color;

  &:hover {
    background: ${props => props.theme.backgroundHover};
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background: ${props => props.theme.background};
    }
  }
`;

export default function Button({
  children,
  theme = "primary",
  outline = false,
  disabled = false,
  ...props
}) {
  const getTheme = () => {
    if (disabled) {
      if (outline) {
        return ButtonThemes.disabled.outline;
      } else {
        return ButtonThemes.disabled;
      }
    } else if (outline) {
      return ButtonThemes[theme].outline;
    } else {
      return ButtonThemes[theme];
    }
  };
  return (
    <StyledButton
      disabled={disabled}
      theme={getTheme()}
      outline={outline}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
