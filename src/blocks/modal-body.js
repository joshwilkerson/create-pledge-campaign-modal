import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledModalBody = styled.div`
  display: block;
  padding: 1em 1.25em 1.5em 1.25em;
  text-align: left;
  color: ${colors.gray_800};

  h1 {
    font-size: 28px;
    font-weight: 500;
    margin: 0 0 0.25em 0;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 0.25em 0;
  }

  p {
    line-height: 1.4em;
    color: ${colors.gray_700};
    font-size: 16px;

    em {
      font-style: italic;
      color: ${colors.gray_700};
    }
  }
`;

export default function ModalBody({ children }) {
  return <StyledModalBody>{children}</StyledModalBody>;
}