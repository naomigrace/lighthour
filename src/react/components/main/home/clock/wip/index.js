function suncalc(sunform) {
  sunform.runcount.value += 1;
  nyear = 1 * sunform.nyear.value;
  nmonth =
    1 *
    document.sunform.nmonth.options[document.sunform.nmonth.selectedIndex]
      .value;
  nday =
    1 *
    document.sunform.nday.options[document.sunform.nday.selectedIndex].value;
  ln = 1 * sunform.latitude.value;
  le = 1 * sunform.longitude.value;
  tzone =
    1 *
    document.sunform.tzone.options[document.sunform.tzone.selectedIndex].value;
  if (document.sunform.daylight.checked == true) {
    tzone += 1;
  }
  if ((nyear % 4 == 0 && nyear % 100 != 0) || nyear % 400 == 0) {
    leapyear = 1;
  } else {
    leapyear = 0;
  }
  if (isNaN(ln) || isNaN(le) || isNaN(nyear)) {
    alert("Values must be entered as numbers.");
  } else if (
    (nday > 30 &&
      (nmonth == 4 || nmonth == 6 || nmonth == 9 || nmonth == 11)) ||
    (nday > 28 && (nmonth == 2 && leapyear == 0)) ||
    (nday > 29 && (nmonth == 2 && leapyear == 1))
  ) {
    alert(
      "The selected month does not have that many days. Please correct the day of the month."
    );
  } else if (nyear < -2000) {
    alert("Please enter a year more recent than 2000 BCE.");
  } else {
    angle_riseset = -50 / 60;
    angle_twilight = -6.0;
    jd = cdtojd(nyear, nmonth, nday);
    noon = calctimenoon(jd, le, ln, tzone);
    jnoon = jd + noon - tzone / 24;
    rise = calctimeangle(0, angle_riseset, jd, le, ln, tzone);
    set = calctimeangle(1, angle_riseset, jd, le, ln, tzone);
    jrise = jd + rise - tzone / 24;
    jset = jd + set - tzone / 24;
    dawn = calctimeangle(0, angle_twilight, jd, le, ln, tzone);
    dusk = calctimeangle(1, angle_twilight, jd, le, ln, tzone);
    t = jcent(jnoon);
    theta = SunDeclination(t);
    azimset =
      (180 / Math.PI) *
      Math.acos(
        (dsin(theta) - dsin(angle_riseset) * dsin(ln)) /
          (dcos(angle_riseset) * dcos(ln))
      );
    elev_midday =
      (180 / Math.PI) *
      (dcos(0) * dcos(ln) * dcos(theta) + dsin(ln) * dsin(theta));
    elev_midnight =
      (180 / Math.PI) *
      (dcos(180) * dcos(ln) * dcos(theta) + dsin(ln) * dsin(theta));
    sunform.noon.value = timeformat(gethms(noon));
    if (
      elev_midday >= angle_riseset &&
      elev_midnight > angle_twilight &&
      elev_midnight < angle_riseset
    ) {
      sunform.dusk.value = "never";
      sunform.dawn.value = "never";
      sunform.sunset.value = timeformat(gethms(set));
      sunform.sunrise.value = timeformat(gethms(rise));
      addLine(azimset);
      alert(
        "Your location never gets darker than twilight on this date, so there is no dawn or dusk. This can happen at high latitudes near summer."
      );
    } else if (elev_midnight > angle_riseset || elev_midday < angle_twilight) {
      sunform.dusk.value = "never";
      sunform.dawn.value = "never";
      sunform.sunset.value = "never";
      sunform.sunrise.value = "never";
      if (elev_midnight > sunset_angle) {
        alert(
          "Your location is in perpetual daytime on this date. This can happen toward the poles near summer."
        );
      } else {
        alert(
          "Your location is in perpetual nighttime on this date. This can happen toward the poles near winter."
        );
      }
    } else if (
      elev_midday > angle_twilight &&
      elev_midday < angle_riseset &&
      elev_midnight <= angle_twilight
    ) {
      sunform.dusk.value = timeformat(gethms(dusk));
      sunform.dawn.value = timeformat(gethms(dawn));
      sunform.sunset.value = "never";
      sunform.sunrise.value = "never";
      alert(
        "Your location never gets brighter than twilight on this date, so there is no sunrise or sunset. This can happen at high latitudes near winter."
      );
    } else if (
      elev_midday > angle_twilight &&
      elev_midday < angle_riseset &&
      elev_midnight > angle_twilight &&
      elev_midnight < angle_riseset
    ) {
      sunform.dusk.value = "never";
      sunform.dawn.value = "never";
      sunform.sunset.value = "never";
      sunform.sunrise.value = "never";
      alert(
        "Your location is in perpetual twilight on this date. This can happen at high latitudes."
      );
    } else {
      sunform.dusk.value = timeformat(gethms(dusk));
      sunform.dawn.value = timeformat(gethms(dawn));
      sunform.sunset.value = timeformat(gethms(set));
      sunform.sunrise.value = timeformat(gethms(rise));
      addLine(azimset);
    }
  }
}
function calctimenoon(jd, le, ln, tzone) {
  jangle_est = jd + 0.5 - le / 360;
  t = jcent(jangle_est);
  eqtime = EquationOfTime(t);
  dayfrac_est = 0.5 - eqtime / 1440 + tzone / 24 - le / 360;
  jangle_est = jd + dayfrac_est - tzone / 24;
  t = jcent(jangle_est);
  eqtime = EquationOfTime(t);
  dayfrac = 0.5 - eqtime / 1440 + tzone / 24 - le / 360;
  return dayfrac;
}
function calctimeangle(postnoon, angle, jd, le, ln, tzone) {
  if (postnoon == 1) {
    f = 1;
  } else {
    f = -1;
  }
  jangle_est = jd + f * 0.25 - le / 360;
  t = jcent(jangle_est);
  eqtime = EquationOfTime(t);
  ha = HourAngle(t, angle, ln);
  dayfrac_est = 0.5 + (f * ha) / 360 - eqtime / 1440 + tzone / 24 - le / 360;
  jangle_est = jd + dayfrac_est - tzone / 24;
  t = jcent(jangle_est);
  eqtime = EquationOfTime(t);
  ha = HourAngle(t, angle, ln);
  dayfrac = 0.5 + (f * ha) / 360 - eqtime / 1440 + tzone / 24 - le / 360;
  return dayfrac;
}
function jcent(jd) {
  return (jd - 2451545) / 36525;
}
function cdtojd(nyear, nmonth, nday) {
  if (nmonth <= 2) {
    nyear -= 1;
    nmonth += 12;
  }
  if (nyear > 1582) {
    A = Math.floor(nyear / 100);
    B = 2 - A + Math.floor(A / 4);
  } else {
    B = 0;
  }
  JD =
    Math.floor(365.25 * (nyear + 4716)) +
    Math.floor(30.60001 * (nmonth + 1)) +
    nday +
    B -
    1524.5;
  return JD;
}
function gethms(jday) {
  dayseconds = (jday - Math.floor(jday)) * 86400;
  hours = Math.floor(dayseconds / 3600);
  minutes = Math.floor((dayseconds / 60) % 60);
  seconds = Math.round(dayseconds % 60);
  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes == 60) {
    minutes = 0;
    hours += 1;
  }
  if (hours == 24) {
    hours = 0;
  }
  return new Array(hours, minutes, seconds);
}
function timeformat(tarray) {
  hours = tarray[0];
  minutes = tarray[1];
  seconds = tarray[2];
  if (seconds >= 30) {
    minutes += 1;
  }
  if (minutes == 60) {
    minutes = 0;
    hours += 1;
  }
  if (hours < 0) {
    hours += 24;
  } else if (hours >= 24) {
    hours -= 24;
  }
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hours >= 13) {
    hours -= 12;
  } else if (hours == 0) {
    hours = 12;
  }
  if (minutes == 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes + " " + ampm;
}
function GeomMeanSunLong(t) {
  return (280.46645 + t * (36000.76983 + t * 0.0003032)) % 360;
}
function GeomMeanAnomalySun(t) {
  return (
    (357.5291 + 35999.0503 * t - 0.0001559 * t * t - 0.00000048 * t * t * t) %
    360
  );
}
function SunEquationOfCenter(t, M) {
  return (
    dsin(M) * (1.914602 - 0.004817 * t + 0.000014 * t * t) +
    dsin(2 * M) * (0.019993 - 0.000101 * t) +
    dsin(3 * M) * 0.000289
  );
}
function EarthEccentricity(t) {
  return 0.016708634 - 0.000042037 * t + 0.0000001267 * t * t;
}
function SunApparentLong(t, L0, C) {
  return L0 + C - 0.00569 - 0.00478 * dsin(125.04 - 1934.136 * t);
}
function MeanObliquityEcliptic(t) {
  return (
    23 +
    (26 + (21.448 - 46.815 * t + 0.00059 * t * t - 0.001813 * t * t * t) / 60) /
      60
  );
}
function ObliquityCorrection(t, epsilon0) {
  return epsilon0 + 0.00256 * dcos(125.04 - 1934.136 * t);
}
function SunRightAscension(t, lambda, epsilon) {
  return (
    (180 / Math.PI) * Math.atan2(dcos(lambda), dcos(epsilon) * dsin(lambda))
  );
}
function SunDeclination(t) {
  L0 = GeomMeanSunLong(t);
  M = GeomMeanAnomalySun(t);
  C = SunEquationOfCenter(t, M);
  lambda = SunApparentLong(t, L0, C);
  epsilon0 = MeanObliquityEcliptic(t);
  epsilon = ObliquityCorrection(t, epsilon0);
  return (180 / Math.PI) * Math.asin(dsin(epsilon) * dsin(lambda));
}
function EquationOfTime(t) {
  L0 = GeomMeanSunLong(t);
  M = GeomMeanAnomalySun(t);
  e = EarthEccentricity(t);
  epsilon0 = MeanObliquityEcliptic(t);
  epsilon = ObliquityCorrection(t, epsilon0);
  y = Math.pow(dtan(epsilon / 2), 2);
  return (
    ((4 * 180) / Math.PI) *
    (y * dsin(2 * L0) -
      2 * e * dsin(M) +
      4 * e * y * dsin(M) * dcos(2 * L0) -
      0.5 * y * y * dsin(4 * L0) -
      1.25 * e * e * dsin(2 * M))
  );
}
function HourAngle(t, angle, ln) {
  theta = SunDeclination(t);
  return (
    (180 / Math.PI) *
    Math.acos((dsin(angle) - dsin(ln) * dsin(theta)) / (dcos(ln) * dcos(theta)))
  );
}
function dsin(d) {
  return Math.sin((d * Math.PI) / 180);
}
function dcos(d) {
  return Math.cos((d * Math.PI) / 180);
}
function dtan(d) {
  return Math.tan((d * Math.PI) / 180);
}
function gettimezone() {
  return -Date().getTimezoneOffset() / 60;
}
function isdst() {
  var d1 = new Date().getTimezoneOffset();
  if (ln >= 0) {
    var d2 = new Date("1/1/2011").getTimezoneOffset();
  } else {
    var d2 = new Date("6/1/2011").getTimezoneOffset();
  }
  if (d1 == d2) {
    return false;
  } else {
    return true;
  }
}
