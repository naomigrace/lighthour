import React from "react";
import { ClockBox } from "../../../../styles/index";
import { whichSun } from "./whichSun";

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);

  return data && data.astronomy
    ? (() => {
        const { city, state, timezone } = data.astronomy;
        var { astronomy } = data.astronomy;

        Array.isArray(astronomy) && (astronomy = astronomy[0]);

        const { sunrise, sunset } = astronomy;

        const sun = whichSun({ sunrise, sunset, timezone });

        const { time, render, diff, isTomorrow } = sun;

        return (
          <ClockBox
            citystate={`${city}, ${state}`}
            time={time || "00:00 AM"}
            what={render || ""}
            diff={diff || 0}
            onClick={resetState}
          />
        );
      })()
    : "oops!";
}
