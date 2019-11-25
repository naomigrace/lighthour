export const sunTime = time => {
  const split = time.split(":");

  var hour = Number(split[0]);

  const minute = split[1].slice(0, 2);
  const meridiem = split[1].slice(2);

  meridiem.toLowerCase() === "pm" && (hour = Number(hour) + 12);

  return { hour: hour, minute: Number(minute) };
};
