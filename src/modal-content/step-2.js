import React, { Fragment, useState, useEffect } from "react";
import formatDate from "format-date";

import CampaignStatus from "../blocks/campaign-status";
import DonationPeriod from "../blocks/donation-period";

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
      setStatus("current");
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

      <DonationPeriod
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <CampaignStatus status={status} />
    </Fragment>
  );
};

export default StepTwoContent;
