import React from "react";
import { ClockBox } from "../../../../styles/index";
import { whichSun } from "./whichSun";
import { useMediaQuery } from "react-responsive";

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);

  const isMobile = useMediaQuery({
    query: "(max-width: 478px)"
  });

  return data && data.astronomy
    ? (() => {
        const { city, state, timezone } = data.astronomy;
        let { astronomy } = data.astronomy;

        Array.isArray(astronomy) && (astronomy = astronomy[0]);

        const { sunrise, sunset } = astronomy;

        const sun = whichSun({ sunrise, sunset, timezone });

        const { minute, render, diff } = sun;

        let hour = sun.hour % 12;
        minute > 30 && (hour === hour + 1);
        let meridiem = sun.hour > 12 ? "PM" : "AM";

        return (
          <ClockBox
            citystate={`${city}, ${state}`}
            sunset={`${hour}:${minute} ${meridiem}` || "12 AM"}
            hour={`${render == "sunset" ? hour - 1 : hour}:${minute} ${meridiem}` || "12 AM"}
            what={render || ""}
            diff={diff || 0}
            onClick={resetState}
            mobile={isMobile}
          />
        );
      })()
    : "oops!";
}
