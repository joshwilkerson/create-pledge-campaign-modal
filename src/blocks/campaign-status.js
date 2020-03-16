import React from "react";
import styled from "styled-components";
import colors from "../colors";
import { IconActive, IconUpcoming, IconConcluded } from "../elements/icons";

const StatusIconsWrapper = styled.div`
  display: block;
  margin: 1em 0 0 0;
`;

const StatusIcon = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${props => (props.active ? colors.topaz : colors.gray_200)};
  padding: 0.5em;
  border-radius: 4px;
  margin: 8px 0;

  div {
    flex: 1;

    h3 {
      font-size: 18px;
      font-weight: 500;
      color: ${props => (props.active ? "#fff" : colors.gray_700)};
      margin-bottom: 0.25em;
    }

    p {
      color: ${props => (props.active ? colors.gray_50 : colors.gray_600)};
      font-size: 14px;
      margin: 0.25em 0 0.5em 0;
    }
  }
`;

const iconActiveColor = colors.gray_25;
const iconInactiveColor = colors.gray_600;

export default function CampaignStatus({ status }) {
  return (
    <StatusIconsWrapper>
      <StatusIcon active={status === "current"}>
        <IconActive
          size={100}
          fill={status === "current" ? iconActiveColor : iconInactiveColor}
        />
        <div>
          <h3>Current Campaign</h3>
          <p>
            Pledges can be created now and any donations made to the campaign’s
            target fund will count towards those pledges.
          </p>
        </div>
      </StatusIcon>

      <StatusIcon active={status === "upcoming"}>
        <IconUpcoming
          size={100}
          fill={status === "upcoming" ? iconActiveColor : iconInactiveColor}
        />
        <div>
          <h3>Upcoming Campaign</h3>
          <p>
            Pledges can be created now, only by administrators. Donations made
            to the campaign’s target fund will only count when made during the
            campaign’s donation period. Future campaigns become active
            automatically.
          </p>
        </div>
      </StatusIcon>

      <StatusIcon active={status === "concluded"}>
        <IconConcluded
          size={100}
          fill={status === "concluded" ? iconActiveColor : iconInactiveColor}
        />
        <div>
          <h3>Concluded Campaign</h3>
          <p>
            Pledges can be created now, only by administrators for
            historical/reporting purposes. Donations made to the campaign’s
            target fund will not count towards this concluded campaign.
          </p>
        </div>
      </StatusIcon>
    </StatusIconsWrapper>
  );
}
