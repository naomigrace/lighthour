import axios from "axios";

import { sanitize, input, port, endpoint } from "../../../../shared/index";

export function get(value, updateState) {
  const { maxLength, name } = input;
  value = sanitize(value);
  value &&
    value.length < maxLength &&
    (updateState({ loading: true, error: null }),
    axios
      .get(encodeURI(api()), { params: { [name]: value } })
      .then(res => console.log("[TODO] SUCCESS: ", res.data))
      .catch(err => updateState({ loading: null, error: err })));
}

function api() {
  const { client, server } = port;
  const origin = window.location.origin;
  return origin.includes(`:${client}`)
    ? `${origin.replace(client, server)}${endpoint}`
    : endpoint;
}
