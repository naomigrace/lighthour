const he = require("he");
const DOMPurify = require("dompurify");

module.exports = value => {
  return value && typeof value === "string" && conditionalPurify(value);
};

function conditionalPurify(value) {
  return DOMPurify.sanitize
    ? he.decode(DOMPurify.sanitize(value))
    : jsdom(DOMPurify, value);
}

function jsdom(createDOMPurify, value) {
  const { JSDOM } = require("jsdom");

  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);

  return he.decode(DOMPurify.sanitize(value));
}
