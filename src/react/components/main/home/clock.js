import React from "react";
import format from "date-fns/format";
import { ClockBox } from "../../../styles/index";

const which_date = ({ sunrise, sunset, utcTime, timezone }) => {
  console.log(sunrise, sunset, utcTime, timezone);
  return {};
};

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);

  return data && data.astronomy
    ? (() => {
        const { city, state, timezone } = data.astronomy;
        var { astronomy } = data.astronomy;

        Array.isArray(astronomy) && (astronomy = astronomy[0]);

        const { sunrise, sunset, utcTime } = astronomy;

        const which_sun = which_date({ sunrise, sunset, utcTime, timezone });

        return (
          <ClockBox
            title={"golden"}
            citystate={`${city}, ${state}`}
            time={which_sun.time || "00:00 AM"}
            timeLeft={which_sun.timeLeft || 0}
            onClick={resetState}
          />
        );
      })()
    : "oops!";
}
