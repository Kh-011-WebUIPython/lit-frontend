import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import SignUp from './sign-up-form';
import SignIn from './sign-in-form';

export default class ModalSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    const {title, src, alt, className} = this.props;
    return (
      <div className="d-inline-block">
        <img
          src={src}
          alt={alt}
          data-toggle="tooltip"
          title={title}
          className="icon nav-icon"
          onClick={this.toggle}
        />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader
            toggle={this.toggle}
          >{ title }
          </ModalHeader>
          <ModalBody>
            { title.indexOf('Up') !== -1 ? <SignUp id="0" /> : <SignIn /> }
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
