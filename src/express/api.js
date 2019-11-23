const shared = require("../shared/index");
const key = process.env.API_KEY;

module.exports = (req, res) => {
  const { name, maxLength } = shared.input;
  var value = req.query[name];
  value = shared.sanitize(value);
  !value
    ? res.status(400).send(`missing ${name}.`)
    : value.length > maxLength
    ? res.status(400).send(`${name} is too long.`)
    : (() => {
        console.log(value);
      })();
};
