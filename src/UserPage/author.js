import React from 'react';
import crown from '../_img/crown.svg';
import {Link} from 'react-router-dom';

const Author = props => {
    return (
        <div className="flex align-items-center">
            <img src={crown} alt="owner" className="img-2"/>
            <h5 className="pl-2"><Link to={`/${props.children}`}>{props.children}</Link></h5>
        </div>
    );
};

export default Author;