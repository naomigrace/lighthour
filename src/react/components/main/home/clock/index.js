import React from "react";
import { ClockBox } from "../../../../styles/index";
import { whichSun } from "./whichSun";
import { useMediaQuery } from "react-responsive";
import { padTheMinutes } from "./time";

export default function Clock({ data, setTheme, resetState }) {
  setTheme(1);

  const isMobile = useMediaQuery({
    query: "(max-width: 478px)"
  });

  const handlePermission = (permission) => {
    if(!('permission' in Notification)) {
      Notification.permission = permission;
    }
    alert('yoyoyoyoyoyoy')
  }

  // check to see if the browser supports promises
  const checkNotificationPromise = () => {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }
    return true;
  }

  const askNotificationPermission = () => {
    if(!("Notification" in window)){
      console.log("This browser does not support notificaitons.")
    } else {
      if(checkNotificationPromise()){
        Notification.requestPermission()
        .then((permission) => handlePermission(permission))
      } else {
        Notification.requestPermission(function(permission){
          handlePermission(permission)
        })
      }
    }
  };

  return data && data.astronomy
    ? (() => {
        const { city, state, timezone } = data.astronomy;
        let { astronomy } = data.astronomy;

        Array.isArray(astronomy) && (astronomy = astronomy[0]);

        const { sunrise, sunset } = astronomy;

        const sun = whichSun({ sunrise, sunset, timezone });

        const { minute, render, diff } = sun;

        let padded_minute = padTheMinutes(minute)
        let hour = sun.hour % 12;
        minute > 30 && hour === hour + 1;
        let meridiem = sun.hour > 12 ? "PM" : "AM";

        return (
          <>
            <ClockBox
              citystate={`${city}, ${state}`}
              sunset={`${hour}:${padded_minute} ${meridiem}` || "12 AM"}
              hour={
                `${render == "sunset" ? hour - 1 : hour}:${padded_minute} ${meridiem}` ||
                "12 AM"
              }
              what={render || ""}
              diff={diff || 0}
              onClick={resetState}
              mobile={isMobile}
            />
            {/* {<button onClick={askNotificationPermission}>get notified</button>} */}
          </>
        );
      })()
    : "oops!";
}
