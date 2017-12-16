import React, {Component} from 'react';
import Slider from 'react-slick';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const DevCard = (props) => {
    return (
        <div className="card-300 d-inline-block ml-5 mr-5">
            <Card>
                <CardImg top width="100%" src={props.bgimg} alt="Card image cap"/>
                <CardBody>
                    <img src={props.avatar} alt="" className="br-50"/>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

class DevCarousel extends Component {
    render() {
        let settings = {
            dots: true,
            autoplay: true,
            speed: 800,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true,
        };
        let devs = [
            {
                name: 'Name Surname',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sit!',
                avatar: 'https://picsum.photos/150/150',
                bgimg: 'https://picsum.photos/300/180',
            },
        ];
        return (
            <Slider {...settings}>
                {devs.map((item, index) => <DevCard key={index} name={item.name + index} description={item.description}
                                                    avatar={item.avatar} bgimg={item.bgimg}/>)}
            </Slider>
        );
    }
}

export default DevCarousel;