const shared = require("../shared/index");
const axios = require("axios");

const app_id = process.env.APP_ID;
const app_code = process.env.APP_CODE;

module.exports = (req, res) => {
  const { name, maxLength } = shared.input;
  var value = req.query[name];
  value = shared.sanitize(value);
  !value
    ? res.status(400).send(`missing ${name}.`)
    : value.length > maxLength
    ? res.status(400).send(`${name} is too long.`)
    : (() => {
        const url = `https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=${value}&app_id=${app_id}&app_code=${app_code}`;
        axios
          .get(encodeURI(url))
          .then(res2 => res.status(200).send(res2.data))
          .catch(err => res.status(400).send(err));
      })();
};
