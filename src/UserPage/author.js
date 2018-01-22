import React from 'react';
import { Link } from 'react-router-dom';
import crown from '../_img/crown.svg';

const Author = props => (
  <div className="flex align-items-center">
    <img src={crown} alt="owner" className="img-2" />
    <h5 className="pl-2"><Link to={`/${props.children}`}>{props.children}</Link></h5>
  </div>
);

export default Author;
