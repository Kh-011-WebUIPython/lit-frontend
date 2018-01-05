import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";

const userRepositoryCount = "User repository count ";

class UserComponent extends Component {
    render() {
        return (
            <div className="card-300 mb-4">
                <Card>
                    <div className="card card-inverse">
                        <div className="card-img-overlay">
                            <div className="flex justify-content-between">
                                <Link to='/user_settings'>
                                    <button type="button" className="btn btn-light btn-sm">Settings</button>
                                </Link>
                                <Link to='/'>
                                    <button type="button" onClick={this.props.signOut}
                                            className="btn btn-light btn-sm">Sign out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <CardImg top width="100%" src="https://picsum.photos/300/180" alt="Card image cap"/>
                    <CardBody>
                        <Link to='/user'><img
                            src={this.props.avatar ? this.props.avatar : 'https://picsum.photos/150/150'}
                            alt="Avatar" className="br-50"/></Link>
                        <CardTitle>{this.props.username}</CardTitle>
                        <CardText>{userRepositoryCount}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default UserComponent;