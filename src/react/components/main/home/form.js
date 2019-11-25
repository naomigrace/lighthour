import React, { Component } from "react";
import { input } from "../../../../shared";
import { get } from "./get/index";
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

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { state, updateState } = this.props;
    event && event.preventDefault();
    const value = state[localState] && state[localState][input.name];
    get(value, updateState, localState);
  }

  render() {
    const { updateState } = this.props;
    const { name } = input;
    var { state } = this.props;
    state = state && state[localState];

    console.log(state)
    const loading = state && state.loading;
    const error = state && state.error
    const search_term = state && state.search
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <TimeLabel />
        <Input
          {...input}
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
        <Button type="submit">
          {loading ? <Spinner/> : name.toUpperCase()}
        </Button>
        {error && <Alert>{`No location found for: ${search_term}`}</Alert>}
        <Shadow />
      </SearchContainer>
    );
  }
}
