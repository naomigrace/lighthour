import React, { Component } from "react";
import Loader from "./loading";
import Clock from "./clock";
import Form from "./form";
import { input } from "../../../../shared/index";
import { get } from "./get/index";

const localState = "URL";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {};

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(input.name);
    get(value, this.updateState, localState);
  }

  updateState(update) {
    this.setState({ ...this.state, ...update });
  }

  render() {
    const { page } = this.state;
    return this.state[localState] && this.state[localState].loading ? (
      <Loader />
    ) : this.state.page ? (
      <Clock state={this.state} />
    ) : (
      <Form updateState={this.updateState} state={this.state} />
    );
  }
}
