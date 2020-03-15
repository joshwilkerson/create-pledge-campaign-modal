import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledButton = styled.button`
  display: inline-flex;
  background: ${props => (props.hightlighted ? colors.emerald : colors.topaz)};
  color: #fff;
  border: none;
  padding: 0.65em 0.75em;
  line-height: 1;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
  font-size: 0.9em;
  overflow: hidden;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: ${colors.gray_400};
    color: ${colors.gray_200};
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
