import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import SignUpForm from './sign-up-form';
// import SignInForm from './sign-in-form';
import SignIn from './_containers/sign-in';

export default class ModalSign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <div className="d-inline-block">
                <img src={this.props.src} alt={this.props.alt}
                     data-toggle="tooltip" title={this.props.title}
                     className="icon nav-icon" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle}
                       className={this.props.className}>
                    <ModalHeader
                        toggle={this.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        {this.props.title.indexOf('Up') !== -1 ? <SignUpForm id='0'/> :
                            <SignIn/>}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}