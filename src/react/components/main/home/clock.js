import React from "react";
import format from "date-fns/format";
import { ClockBox } from "../../../styles/index";

// const which_date = (sunrise, sunset) => {
//   const now = format(new Date(), 'p')
//   const now_split = now.split()
//   const now_split_time = now_split[0].split(':')
//   const now_is_am = now_split[1] == "AM"
//   const now_hour = now_split_time[0]
//   const now_minutes = now_split_time[1]

//   if(now_is_am){
//   // AM? use sunset unless we're past it
//     const split_time = sunset.split(':')
//     const sunset_hour = split_time[0]

//     if(now_hour > sunset_hour){
//       return "sunrise"
//     } else {
//       const sunset_minutes = split_time[1]

//       // less than or equal to sunset hour,
//       if(now_minutes === sunset_minutes){
//         return "sunrise"
//       }
//       return "sunset"
//     }
//   } else {
//   // PM? use sunrise unless we're past it
//     const split_time = sunrise.split(':')
//     const sunrise_hour = split_time[0]

//     if(now_hour > sunrise_hour) {
//       return "sunset"
//     } else {
//       const sunrise_minutes = split_time[1]
//       if(now_minutes === sunrise_minutes){
//         return "sunset"
//       }
//       return "sunrise"
//     }
//   }
// };

const which_date = (sunrise, sunset) => {
  console.log(sunrise, sunset);
};

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);
  if (data && data.astronomy && data.astronomy.city) {
    const city = data.astronomy && data.astronomy.city;
    const state = data.astronomy && data.astronomy.state;
    let times = data.astronomy && data.astronomy.astronomy;

    // if astronomy is an array, take the first obj
    Array.isArray(times) && (times = times[0]);

    const { sunrise, sunset } = times;
    let which_sun = which_date(sunrise, sunset);
    // console.log(which_sun);

    return (
      <ClockBox
        title={"golden"}
        citystate={`${city}, ${state}`}
        time={sunset}
        timeLeft={4}
        onClick={resetState}
      />
    );
  } else {
    return "oops!";
  }
}
