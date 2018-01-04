import React, {Component} from 'react';
import {
    Badge, Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter,
    ModalHeader
} from 'reactstrap';
import {Link} from 'react-router-dom';
import trash from '../img/trash.svg';


class ListBranches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branches: [
                {
                    title: 'Development',
                    status: 'active'
                },
                {
                    title: 'feature/KW-1/something-do-it',
                    status: 'closed'
                },
                {
                    title: 'feature/KW-2/something-do-it',
                    status: 'active'
                },
                {
                    title: 'feature/KW-3/something-do-it',
                    status: 'active'
                },
                {
                    title: 'feature/KW-4/something-do-it',
                    status: 'closed'
                },
                {
                    title: 'feature/KW-5/something-do-it',
                    status: 'active'
                },
                {
                    title: 'feature/KW-6/something-do-it',
                    status: 'active'
                },
                {
                    title: 'feature/KW-7/something-do-it',
                    status: 'closed'
                }
            ]
        }
    }

    changeClassStatus = (status) => ((status === 'closed') ?
        'bg-danger' : 'bg-success');

    render() {

        return (
            <ListGroup className="container pre-scrollable">
                {this.state.branches.map((item) => <ListGroupItem key={item.title}
                                                       className="flex justify-content-between">
                        <Link
                            to='/repository' className=''>{item.title}</Link>
                        <div>
                            <Badge pill className={this.changeClassStatus(item.status)}>{item.status}</Badge>
                            <ModalDelete src={trash} alt="Delete branch"
                                         title="Delete branch"/>
                        </div>
                    </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}


class ModalDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="d-inline-block">
                <img src={this.props.src} alt={this.props.alt}
                     title={this.props.title}
                     className="icon nav-icon ml-4 m-0" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle}
                       className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Delete
                        branch</ModalHeader>
                    <ModalBody>
                        <span>Are you sure?</span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={this.toggle}>Delete</Button>{' '}
                        <Button color="secondary"
                                onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default ListBranches;