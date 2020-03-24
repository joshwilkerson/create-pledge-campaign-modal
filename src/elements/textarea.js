import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${colors.gray_400};
  outline: none;
  font-size: 0.85em;
  color: ${colors.gray_800};
  resize: vertical;

  &:active,
  &:focus {
    border-color: ${colors.gray_700};
  }

  &:disabled {
    background: ${colors.gray_200};
    border-color: ${colors.gray_400};
    cursor: not-allowed;
  }
`;

export default function TextInput({
  value,
  onChange,
  disabled = false,
  ...props
}) {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
}
