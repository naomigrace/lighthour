export const localTime = timezone => {
  const clientTime = new Date();

  const timezoneOffset = clientTime.getTimezoneOffset() / 60;

  const gmt = clientTime.getHours() + timezoneOffset;

  const localHour = (gmt + timezone) % 24;

  return { hour: localHour, minute: clientTime.getMinutes() };
};
