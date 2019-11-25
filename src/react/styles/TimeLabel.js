import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Label = styled.p`
  position: absolute;
  top: -47px;
  width: 100%;
  text-align: center;
  color: #79b0f6;
  font-family: sans-serif;
  font-weight: 100;
`;

const time = format(new Date(), "hh:mm A");

const TimeLabel = () => <Label>the time is now {time}</Label>;

export default TimeLabel;
