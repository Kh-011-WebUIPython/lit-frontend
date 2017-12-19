import React, {Component} from 'react';
import logo from '../logo.svg';

class Search extends Component {
    render() {
        return (
            <div className="search p-5">
                <img src={logo} alt="LIT logo" className="logo-image mr-2"/>

            </div>
        );
    }
}

export default Search;