import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 1em 1.25em;
  background: ${colors.topaz};
  color: #fff;
  border-radius: 4px 4px 0 0;
`;

export default function ModalHeader({ children, title = "" }) {
  return <StyledModalHeader>{children ? children : title}</StyledModalHeader>;
}
