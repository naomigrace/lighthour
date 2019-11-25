import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 4rem;
  box-shadow: ${props => props.theme["box-shadow"]};
  border-radius: ${props => props.theme["border-radius"]};
  min-width: ${props => props.mobile ? '300px' : '350px'};
  text-align: center;
  position: relative;
`;

const TopBox = styled.div`
  background: ${props => props.theme.color};
  border-radius: ${props => props.theme["border-radius"]}
    ${props => props.theme["border-radius"]} 0 0;
  padding: ${props => props.mobile ? '10px' : '20px'};
  margin-bottom: 0;
`;
const BottomBox = styled.div`
  margin-top: 0;
  padding: ${props => props.mobile ? '30px' : '40px'};
  background: #ffffff;
  border-radius: 0 0 26px 26px;
  ${props => props.mobile && `
    h1 {
      margin-bottom: 20px;
    }
    h2 {
      margin-top: 0;
    }
  `};
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  color: #ffffff;
  line-height: 39px;
  text-transform: uppercase;
  line-height: 47px;
  ${props => props.mobile && 'margin: 20px 0'};
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
  min-width: ${props => props.mobile ? '300px' : '350px'};
  min-height: ${props => props.mobile ? '500px' : '600px'};
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

const ClockBox = ({ citystate, hour, what, diff, onClick, mobile }) => (
  <>
    <Container mobile={mobile}>
      <Back>
        <Link to="/" onClick={onClick}>
          BACK
        </Link>
      </Back>
      <TopBox mobile={mobile}>
        <Title mobile={mobile}>
          THE NEXT
          <br />
          GOLDEN
          <br />
          HOUR
        </Title>
      </TopBox>
      <BottomBox mobile={mobile}>
        <City>In {citystate}</City>
        <Time>{hour}</Time>
        <TimeLeft>
          {what} is in {diff} hours!
        </TimeLeft>
      </BottomBox>
      <Shadow mobile={mobile}/>
    </Container>
  </>
);

export default ClockBox;
