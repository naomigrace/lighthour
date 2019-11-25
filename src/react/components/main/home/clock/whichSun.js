import { sunTime, localTime } from "./time/index";

export const whichSun = ({ sunrise, sunset, timezone }) => {
  return sunrise && sunset
    ? (() => {
        const sunriseT = sunTime(sunrise);
        const sunsetT = sunTime(sunset);
        const currentT = localTime(timezone);

        return currentT.hour < sunriseT.hour ||
          (currentT.hour === sunriseT.hour && currentT.minute < sunriseT.minute)
          ? {
              diff: sunriseT.hour - currentT.hour,
              time: sunrise,
              render: "sunrise"
            }
          : currentT.hour < sunsetT.hour ||
            (currentT.hour === sunsetT.hour && currentT.minute < sunsetT.minute)
          ? {
              diff: sunsetT.hour - currentT.hour,
              time: sunset,
              render: "sunset"
            }
          : {
              diff: sunriseT.hour - currentT.hour + 24,
              time: sunrise,
              render: "sunrise",
              isTomorrow: true
            };
      })()
    : {};
};
