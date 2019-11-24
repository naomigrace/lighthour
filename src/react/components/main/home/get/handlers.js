import { history } from "../../../../redux/store";

export function loading(updateState, localState) {
  updateState({ [localState]: { loading: true, error: null } });
}

export function success(updateState, localState, name, value, data) {
  history.push(`?${name}=${value}`);
  updateState({
    page: 1,
    data: data,
    [localState]: { loading: null, error: null }
  });
}

export function error(updateState, localState, err) {
  updateState({ [localState]: { loading: null, error: err } });
}
