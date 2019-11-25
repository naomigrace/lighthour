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

        const { minute, render, diff } = sun;

        var hour = sun.hour % 12;
        minute > 30 && (hour = hour + 1);
        var meridiem = sun.hour > 12 ? "PM" : "AM";

        return (
          <ClockBox
            citystate={`${city}, ${state}`}
            hour={`${hour} ${meridiem}` || "12 AM"}
            what={render || ""}
            diff={diff || 0}
            onClick={resetState}
          />
        );
      })()
    : "oops!";
}
