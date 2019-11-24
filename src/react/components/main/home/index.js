import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./loading";
import Clock from "./clock";
import Form from "./form";
import { input } from "../../../../shared/index";
import { get } from "./get/index";

const localState = "URL";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  state = {};

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(input.name);
    get(value, this.updateState, localState);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname, search, hash }
    } = this.props;
    pathname === "/" &&
      prevProps.location.search &&
      !search &&
      this.resetState();
  }

  updateState(update) {
    this.setState({ ...this.state, ...update });
  }

  resetState() {
    this.updateState({ page: 0 });
    this.props.setTheme(0);
  }

  render() {
    const { page } = this.state;
    return this.state[localState] && this.state[localState].loading ? (
      <Loader />
    ) : this.state.page ? (
      <Clock
        {...this.state}
        setTheme={this.props.setTheme}
        resetState={this.resetState}
      />
    ) : (
      <Form updateState={this.updateState} state={this.state} />
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.router.location
  };
}

export default connect(mapStateToProps)(HomePage);
