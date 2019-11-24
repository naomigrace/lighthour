import React, { Component } from "react";

import { input } from "../../../../shared";
import { get } from "./get";
import { Input, Button, SearchContainer } from "../../../styles";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { [input.name]: "" };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(update) {
    this.setState({ ...this.state, ...update });
  }

  handleSubmit(event) {
    event.preventDefault();
    var value = this.state[input.name];
    get(value, this.updateState);
  }

  render() {
    const { name } = input;
    return (
      <SearchContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            {...input}
            value={this.state[name]}
            onChange={e =>
              this.updateState({
                [name]: e.target.value,
                loading: null,
                error: null
              })
            }
          />
          <Button type="submit" value={name}>SEARCH</Button>
        </form>
      </SearchContainer>
    );
  }
}
