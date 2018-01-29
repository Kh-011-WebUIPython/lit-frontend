import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class ConfirmModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { className, _delete } = this.props;
    return (
      <div>
        <Button className="mt-5" color="danger" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Are you sure?</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={_delete}>Yes, delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>No, cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;
