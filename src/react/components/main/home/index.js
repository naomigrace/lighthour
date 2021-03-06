import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./loading";
import Clock from "./clock/index";
import Form from "./form";
import { input } from "../../../../shared/index";
import { get } from "./get/index";
import { Header } from "../../../styles";

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
      location: { pathname, search }
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
    return this.state[localState] && this.state[localState].loading ? (
      <Loader />
    ) : this.state.page ? (
      <Clock
        {...this.state}
        setTheme={this.props.setTheme}
        resetState={this.resetState}
      />
    ) : (
      <>
        <Header>when&apos;s golden hour?</Header>
        <Form updateState={this.updateState} state={this.state} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.router.location
  };
}

export default connect(mapStateToProps)(HomePage);
