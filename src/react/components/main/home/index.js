import React, { Component } from "react";
import Clock from "./clock";
import Form from "./form";
import { input } from "../../../../shared/index";
import { get } from "./get/index";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {};

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(input.name);
    get(value, this.updateState, "URL");
  }

  updateState(update) {
    this.setState({ ...this.state, ...update });
  }

  render() {
    return this.state.page ? (
      <Clock state={this.state} />
    ) : (
      <Form updateState={this.updateState} state={this.state} />
    );
  }
}
