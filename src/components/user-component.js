import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


const username = "User name";
const user_avatar = "";
const user_backgroun_image= "";
const user_repository_count = "User repository count ";



class UserComponent extends Component {

    render() {
        return (

            <div className="card-300 mb-4">
                <Card>
                    <div className="card card-inverse">
                        <div className="card-img-overlay">
                            <div className="flex justify-content-between">
                                <button type="button" className="btn btn-light btn-sm"> Settings</button>
                                <button type="button" className="btn btn-light btn-sm"> Sign out</button>
                            </div>
                        </div>
                    </div>
                    <CardImg top width="100%"  /*src={user_background_image}*/  src="https://picsum.photos/300/180"  alt="Card image cap"/>
                    <CardBody>
                        <img /*src = {user_avatar}*/ src="https://picsum.photos/150/150" alt="dfgh" className="br-50"/>
                        <CardTitle>{username}</CardTitle>
                        <CardText>{user_repository_count}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default UserComponent;