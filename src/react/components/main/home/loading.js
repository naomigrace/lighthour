import React from "react";
import { SunLoader, Sun, SunLabel } from "../../../styles";

export default function Loader() {
  return (
    <div>
      <SunLabel>
        one
        <br />
        sec,
        <br />
        chasing
        <br />
        the
        <br />
        sun
      </SunLabel>
      <SunLoader
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMinYMin meet"
      >
        <Sun cx="50" cy="50" r="35" />
      </SunLoader>
    </div>
  );
}
