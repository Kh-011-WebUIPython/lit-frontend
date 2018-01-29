import React, {Component} from "react";
import search from '../_img/search.svg';
import login from '../_img/login.svg';
import registration from '../_img/registration.svg';
import ModalSign from './modal-sign';

export default class NavLinks extends Component {
    changeState = () => this.setState({'searchField': !this.state.searchField});

    getClassName = () => 'form-control search-field' +
        (this.state.searchField ? '' : ' search-field-invisible');

    constructor(props) {
        super(props);
        this.state = {'searchField': false};
    }

    render() {
        return (
            <div>
                <input type="text" className={this.getClassName()}
                       placeholder='Search' onBlur={this.changeState}/>
                <img src={search} alt="Search" data-toggle="tooltip"
                     title="Search" className="icon nav-icon"
                     onClick={this.changeState}/>
                <ModalSign src={login} alt="Sign In" title="Sign In"/>
                <ModalSign src={registration} alt="Sign Up" title="Sign Up"/>
            </div>
        );
    }
}