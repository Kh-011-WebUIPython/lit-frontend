import React, {Component} from 'react';
import {Button, Card, CardBody, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import crown from '../_img/crown.svg';


const AllParticipants = (props) => {
    return (
        <div className="flex justify-content-start">
            <Link to='/user'><img src={props.avatar} alt=""
                                  className="br-50"/></Link>
            <Link to='/user' className="p-4">{props.name}</Link>
        </div>
    );
};

class Team extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {

        let participant = [
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'Jane Dou'
            },
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'Jane Dou'
            },
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'John Dou'
            },
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'Jane Dou'
            },
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'John Dou'
            }
        ]

        let owner = [
            {
                avatar: 'https://picsum.photos/50/50',
                name: 'Jane Dou Owner',

            }]

        return (
            <div className="w-100">
                <Button color="primary" className="my-4"
                        onClick={this.toggle}>Team</Button>
                <Collapse
                    isOpen={this.state.collapse}>
                    <Card>
                        <CardBody className="mt-0 w-100">
                            <div className="container">
                                <div className="flex justify-content-between">
                                    {owner.map(
                                        (item) => <div key={item.name}
                                                       className="flex justify-content-start">
                                            <Link to='/user'><img
                                                src={item.avatar}
                                                alt=""
                                                className="br-50"/></Link>
                                            <Link to='/user'
                                                  className="p-4">{item.name}</Link>
                                        </div>)}
                                    <img src={crown} alt="owner"
                                         className="img-2"/>
                                </div>
                                {participant.map(
                                    (item) => <AllParticipants key={item.name}
                                                               avatar={item.avatar}
                                                               name={item.name}/>
                                )}
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Team;
