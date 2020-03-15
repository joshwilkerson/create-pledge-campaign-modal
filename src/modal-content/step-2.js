import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../colors";
import formatDate from "format-date";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CampaignStatus } from "../elements";

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

const StepTwoContent = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const currentDateFormatted = formatDate("1{month}{day}", new Date());
    const startDateFormatted = formatDate("1{month}{day}", startDate);
    const endDateFormatted = formatDate("1{month}{day}", endDate);

    if (
      currentDateFormatted > startDateFormatted &&
      currentDateFormatted < endDateFormatted
    ) {
      setStatus("active");
    } else if (
      currentDateFormatted < startDateFormatted &&
      currentDateFormatted < endDateFormatted
    ) {
      setStatus("upcoming");
    } else if (
      currentDateFormatted > startDateFormatted &&
      currentDateFormatted > endDateFormatted
    ) {
      setStatus("concluded");
    } else {
      setStatus("");
    }
  }, [startDate, endDate]);

  return (
    <Fragment>
      <h1>Donation Period</h1>
      <h2>When do donations count towards this pledge campaign?</h2>
      <p>
        Donations given between these dates will count towards a donor's pledge
        to this pledge campaign. If the start date for this campaign is far
        away, it's important to communicate to your donors that donations before
        the donation period will not count towards their pledge goals.
      </p>

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

      <CampaignStatus status={status} />
    </Fragment>
  );
};

export default StepTwoContent;
