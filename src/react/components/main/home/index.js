import React from "react";

import Form from "./form/index";

import { sanitize, input } from "../../../../shared/index";

export default function HomePage() {
  var { name } = input;
  const params = new URLSearchParams(window.location.search);
  var name = params.get(name);
  name = sanitize(name);
  console.log(name);
  return <Form />;
}

// export function getQuery(q) {
//   const params = new URLSearchParams(window.location.search);
//   const get = params.get(q);
//   const sanitized = sanitize({ val: get });
//   return sanitized
//     ? sanitized
//     : sanitize({ val: window.location.hash })
//     ? sanitize({ val: window.location.hash })
//     : null;
// }

// * decodeURIcomponent not required
// as decoding is part of sanitized().
