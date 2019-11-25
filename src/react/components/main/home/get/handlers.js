import { history } from "../../../../redux/store";

export function loading({ updateState, localState, value }) {
  updateState({ [localState]: { loading: true, error: null, ...value } });
}

export function success({ value, updateState, data, localState }) {
  const query = new URLSearchParams(value).toString();
  history.push(`?${query}`);
  updateState({
    page: 1,
    data: data,
    [localState]: { loading: null, error: null }
  });
}

export function error({ updateState, localState, err, value }) {
  updateState({ [localState]: { loading: null, error: err, ...value } });
}
