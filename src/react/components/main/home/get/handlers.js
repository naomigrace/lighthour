import { history } from "../../../../redux/store";

export function loading(props) {
  const { updateState, localState, value } = props;
  updateState({ [localState]: { loading: true, error: null, ...value } });
}

export function success(props) {
  const { value, updateState, data, localState } = props;
  const query = new URLSearchParams(value).toString();
  history.push(`?${query}`);
  updateState({
    page: 1,
    data: data,
    [localState]: { loading: null, error: null }
  });
}

export function error(props) {
  const { updateState, localState, err, value } = props;
  updateState({ [localState]: { loading: null, error: err, ...value } });
}
