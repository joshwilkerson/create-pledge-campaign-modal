import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledModalWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: -1px 1px 6px ${colors.gray_400};
  background: #fff;
`;

export default function ModalWrapper({ children }) {
  return <StyledModalWrapper>{children}</StyledModalWrapper>;
}
