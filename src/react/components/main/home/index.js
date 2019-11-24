import React, { Component } from "react";
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
    console.log(this.state);
    return this.state.page ? (
      "results page"
    ) : (
      <Form updateState={this.updateState} state={this.state} />
    );
  }
}
