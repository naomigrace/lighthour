import React from "react";
import { ClockBox } from "../../../styles/index";

const which_date = (sunrise, sunset) => {};

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);
  if (data.astronomy.city) {
    // console.log(data);
    const city = data.astronomy && data.astronomy.city;
    let times = data.astronomy && data.astronomy.astronomy;

    // if astronomy is an array, take the first obj
    if (Array.isArray(times)) {
      times = times[0];
    }

    const { sunrise, sunset } = times;

    return (
      <ClockBox
        title={"golden"}
        city={city}
        time={sunset}
        timeLeft={4}
        onClick={resetState}
      />
    );
  } else {
    return "oops!";
  }
}
