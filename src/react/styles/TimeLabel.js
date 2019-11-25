import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Label = styled.p`
  display: inline-block;
  font-weight: 300;
  ${props => props.searchbox && `
    display: block;
    position: absolute;
    top: -47px;
    width: 100%;
    text-align: center;
    color: #79b0f6;
  `}
`;

const TimeLabel = ({searchbox=false}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const time = date.toLocaleTimeString();

  return <Label searchbox={searchbox}>{searchbox ? `your local time is ${time}` : time}</Label>;
};

export default TimeLabel;
