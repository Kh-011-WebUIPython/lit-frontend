import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkActions } from '../_actions';

class NotFoundPage extends Component {
  componentDidMount() {
    this.props.dispatch(checkActions.checkUserAndRepoClear());
  }

  render() {
    return (<h1>404</h1>);
  }
}

const mapStateToProps = state => ({});

const ConnectedNotFoundPage = connect(mapStateToProps)(NotFoundPage);

export default ConnectedNotFoundPage;