import React from "react";
import { useMediaQuery } from "react-responsive";
import { input } from "../../../../shared";
import { get } from "./get/index";
import { Search } from "styled-icons/octicons/Search";
import {
  Alert,
  SearchContainer,
  Input,
  Button,
  Shadow,
  TimeLabel,
  Spinner
} from "../../../styles";

const localState = "Form";

const Form = props => {
  const handleSubmit = event => {
    const { state, updateState } = props;
    event && event.preventDefault();
    const value = state[localState] && state[localState][input.name];
    get(value, updateState, localState);
  };

  const { updateState } = props;
  const { name } = input;
  var { state } = props;
  state = state && state[localState];

  const loading = state && state.loading;
  const error = state && state.error;
  const search_term = state && state.search;

  const isMobile = useMediaQuery({
    query: "(max-width: 478px)"
  });

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <TimeLabel searchbox={true} />
      <Input
        {...input}
        placeholder={isMobile ? "Where ya chasin?" : input.placeholder}
        value={(state && state[name]) || ""}
        onChange={e =>
          updateState({
            [localState]: {
              [name]: e.target.value,
              loading: null,
              error: null
            }
          })
        }
      />
      <Button type="submit" mobile={isMobile}>
        {loading ? (
          <Spinner />
        ) : isMobile ? (
          <Search style={{ marginTop: "-5px" }} />
        ) : (
          name.toUpperCase()
        )}
      </Button>
      {error && <Alert>{`No location found for: ${search_term}`}</Alert>}
      <Shadow mobile={isMobile} />
    </SearchContainer>
  );
};

export default Form;
