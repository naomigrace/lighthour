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
              render: "sunrise",
              diff: sunriseT.hour - currentT.hour,
              ...sunriseT
            }
          : currentT.hour < sunsetT.hour ||
            (currentT.hour === sunsetT.hour && currentT.minute < sunsetT.minute)
          ? {
              render: "sunset",
              diff: sunsetT.hour - currentT.hour,
              ...sunsetT
            }
          : {
              render: "sunrise",
              diff: sunriseT.hour - currentT.hour + 24,
              ...sunriseT
            };
      })()
    : {};
};
