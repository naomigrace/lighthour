import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 4rem;
  box-shadow: ${props => props.theme["box-shadow"]};
  border-radius: ${props => props.theme["border-radius"]};
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
  padding: 40px;
  background: #ffffff;
  border-radius: 0 0 26px 26px;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  color: #ffffff;
  line-height: 39px;
  text-transform: uppercase;
  line-height: 47px;
`;

const City = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.color};
  text-align: center;
  text-transform: uppercase;
  max-width: 26ch;
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
  background: ${props => props.theme.shadow};
  border-radius: ${props => props.theme["border-radius"]};
  position: absolute;
  left: -50px;
  top: 50px;
  z-index: -1;
  min-width: 400px;
  min-height: 600px;
`;

const backColor = "white";

const Back = styled.div`
  a {
    position: absolute;
    right: 0;
    top: -30px;
    font-weight: 700;
    color: ${backColor};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    &:hover {
      border-bottom: 2px solid ${backColor};
    }
  }
`;

const ClockBox = ({ citystate, hour, what, diff, onClick }) => (
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
          GOLDEN
          <br />
          HOUR
        </Title>
      </TopBox>
      <BottomBox>
        <City>In {citystate}</City>
        <Time>{hour}</Time>
        <TimeLeft>
          {what} is in {diff} hours!
        </TimeLeft>
      </BottomBox>
      <Shadow />
    </Container>
  </>
);

export default ClockBox;
