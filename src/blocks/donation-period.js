import React from "react";
import styled from "styled-components";
import colors from "../colors";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickersWrapper = styled.div`
  display: flex;
  padding: 1em 0;

  & > div {
    display: inline-flex;
    flex-direction: column;
    width: 50%;

    &:first-child {
      margin-right: 1em;
    }

    &:last-child {
      margin-left: 1em;
    }

    input {
      height: 40px;
      width: 100%;
      display: block;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid ${colors.gray_400};
      border-radius: 4px;
      font-size: 14px;
      color: ${colors.gray_700};
    }

    label {
      color: ${colors.gray_600};
      font-size: 13px;
      margin-bottom: 0.5em;
    }
  }
`;

export default function DonationPeriod({
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) {
  return (
    <DatePickersWrapper>
      <div>
        <label>Donation Period Begins:</label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label>Donation Period Ends:</label>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          placeholderText="Select end date"
        />
      </div>
    </DatePickersWrapper>
  );
}
