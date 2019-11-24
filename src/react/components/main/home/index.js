import React, { Component } from "react";

import Form from "./form/index";

import { input } from "../../../../shared/index";

import { get } from "./get";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {};

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    var value = params.get(input.name);
    get(value, this.updateState);
  }

  updateState(update) {
    this.setState({ ...this.state, ...update });
  }

  render() {
    console.log(this.state);
    return <Form />;
  }
}
