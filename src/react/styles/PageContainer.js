import styled from "styled-components";
import { logoHeight } from "./Logo";

export default styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  padding-bottom: ${logoHeight + 100}px;
`;
