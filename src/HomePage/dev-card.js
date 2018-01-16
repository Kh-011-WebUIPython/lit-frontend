import React from 'react';
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';

const DevCard = (props) => {
    return (
        <div className="card-300 d-inline-block ml-lg-5 mr-lg-5">
            <Card>
                <CardImg top width="100%" src={props.bgimg} alt="Card image cap"/>
                <CardBody>
                    <img src={props.avatar} alt="" className="br-50"/>
                    <CardTitle>{props.name}</CardTitle>
                    {/*<CardText>{props.description}</CardText>*/}
                    {/*<Button>Button</Button>*/}
                </CardBody>
            </Card>
        </div>
    );
};

export default DevCard;