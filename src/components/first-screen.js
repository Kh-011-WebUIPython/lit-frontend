import React, {Component} from 'react';
import Header from './header';
import down from '../img/down.svg';

class FirstScreen extends Component {
    render() {
        return (
                <div className="first-screen flex-column justify-content-between">
                    <Header/>
                    <div className="flex flex-column align-items-center">
                        <h1 className="display-1 text-muted bg-dark-0">LIT</h1>
                        <h2 className="display-4 text-muted bg-dark-0 mb-6">Welcome to Chaos World</h2>
                    </div>
                    <img src={down} alt="Dowm" className="nav-icon ml-auto mr-auto"/>
                </div>
        );
    }
}

export default FirstScreen;
