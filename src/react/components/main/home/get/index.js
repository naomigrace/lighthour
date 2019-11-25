import axios from "axios";
import { input, sanitize } from "../../../../../shared/index";
import { api } from "./api";
import { loading, error, success } from "./handlers";

export function get(value, updateState, localState) {
  const { maxLength, name } = input;

  if (value && value.length < maxLength) {
    const path = encodeURI(api());

    value = { [name]: sanitize(value) };

    const props = { updateState, localState, value };

    loading(props);

    axios
      .get(path, { params: value })
      .then(res => delay(() => success({ ...props, name, data: res.data })))
      .catch(err => delay(() => error({ ...props, err })));
  }
}

function delay(fn) {
  setTimeout(() => {
    fn();
  }, 500);
}
