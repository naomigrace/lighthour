import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 4rem;
  box-shadow: ${props => props.theme["box-shadow"]};
  border-radius: ${props => props.theme["border-radius"]};
  font-family: sans-serif;
  min-width: 350px;
  text-align: center;
  position: relative;
`;

const TopBox = styled.div`
  background: ${props => props.theme.color};
  border-radius: ${props => props.theme["border-radius"]}
    ${props => props.theme["border-radius"]} 0 0;
  padding: 20px;
  margin-bottom: 0;
`;
const BottomBox = styled.div`
  margin-top: 0;
  padding: 20px;
  background: #ffffff;
  border-radius: 0 0 26px 26px;
`;

const Title = styled.h1`
  font-family: SourceSansPro-Black;
  font-size: 48px;
  color: #ffffff;
  line-height: 39px;
  text-transform: uppercase;
`;

const City = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.color};
  text-align: center;
  text-transform: uppercase;
`;

const Time = styled.h1`
  font-size: 82px;
  color: ${props => props.theme.color};
  text-align: center;
  margin-top: 0;
`;

const TimeLeft = styled.small`
  font-size: 16px;
  color: ${props => props.theme.color};
`;

const Shadow = styled.div`
  opacity: 0.4;
  background: ${props => props.theme.color};
  border-radius: ${props => props.theme["border-radius"]};
  position: absolute;
  left: -50px;
  top: 50px;
  z-index: -1;
  min-width: 350px;
  min-height: 500px;
`;

const backColor = "white";

const Back = styled.div`
  a {
    position: absolute;
    right: 0;
    top: -30px;
    font-family: sans-serif;
    color: ${backColor};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    &:hover {
      border-bottom: 2px solid ${backColor};
    }
  }
`;

const ClockBox = ({ title, city, time, timeLeft, onClick }) => (
  <>
    <Container>
      <Back>
        <Link to="/" onClick={onClick}>
          BACK
        </Link>
      </Back>
      <TopBox>
        <Title>
          THE NEXT
          <br />
          {title}
          <br />
          HOUR
        </Title>
      </TopBox>
      <BottomBox>
        <City>In {city}</City>
        <Time>{time}</Time>
        <TimeLeft>you've got {timeLeft} hours to go!</TimeLeft>
      </BottomBox>
      <Shadow />
    </Container>
  </>
);

export default ClockBox;
