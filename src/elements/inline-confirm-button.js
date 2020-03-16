import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import colors from "../colors";
import { Button } from "../elements";

const InlineConfirmDefault = styled.div`
  display: inline-block;
`;

const InlineConfirmLinks = styled.div`
  display: ${props => (props.show ? "inline-block" : "none")};

  span {
    margin: 0 4px;
    opacity: 0.75;
    transition: 0.2s ease all;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export default function InlineConfirmButton({
  text = "Confirm Text",
  confirmText = "Are you sure?",
  confirmOptions,
  onClick,
  disabled = false
}) {
  const [isConfirming, setIsConfirming] = useState(false);
  const node = useRef();

  useEffect(() => {
    if (isConfirming) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isConfirming]);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsConfirming(false);
  };

  const handleConfirm = () => {
    onClick();
    setIsConfirming(false);
  };

  const ConfirmWrapperStyles = {
    opacity: isConfirming && "1",
    backgroundColor: isConfirming && colors.ruby
  };

  return (
    <div ref={node}>
      <Button style={ConfirmWrapperStyles} disabled={disabled}>
        <InlineConfirmDefault
          show={isConfirming}
          onClick={() => !disabled && setIsConfirming(true)}
        >
          {isConfirming ? confirmText : text}
        </InlineConfirmDefault>
        <InlineConfirmLinks show={isConfirming}>
          <span onClick={handleConfirm}>{confirmOptions[0]}</span>
          <span onClick={() => setIsConfirming(false)}>
            {confirmOptions[1]}
          </span>
        </InlineConfirmLinks>
      </Button>
    </div>
  );
}
