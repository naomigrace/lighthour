import React, { Component } from "react";

import { sanitize, input } from "../../../../../shared";
import { get } from "./get";

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
    value = sanitize(value);
    value && get(value, this.updateState);
  }

  render() {
    const { name, maxLength, placeholder } = input;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          value={this.state[name]}
          onChange={e =>
            this.updateState({
              [name]: e.target.value,
              loading: null,
              error: null
            })
          }
        />
        <input type="submit" value={name} />
      </form>
    );
  }
}
