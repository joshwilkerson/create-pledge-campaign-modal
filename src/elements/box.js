import React from "react";
import styled from "styled-components";
import colors from "../colors";

const BoxThemes = {
  default: {
    bgColor: colors.gray_300,
    textColor: colors.gray_700
  },
  success: {
    bgColor: colors.emerald,
    textColor: colors.white
  },
  error: {
    bgColor: colors.ruby,
    textColor: colors.white
  },
  info: {
    bgColor: colors.topaz,
    textColor: colors.white
  }
};

const StyledBox = styled.div`
  && {
    display: block;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    padding: ${props => props.padding}em;
    margin: 0.5em 0;
    border-radius: 4px;

    h2 {
      font-weight: bold;
      color: ${props => props.theme.textColor};
    }

    p {
      color: ${props => props.theme.textColor};
      margin-top: 0;
      font-size: 14px;
    }

    & *:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function Box({
  children,
  padding = 1,
  theme = "default",
  ...props
}) {
  return (
    <StyledBox padding={padding} theme={BoxThemes[theme]} {...props}>
      {children}
    </StyledBox>
  );
}
