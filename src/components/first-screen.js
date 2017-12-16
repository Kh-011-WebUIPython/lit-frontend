import React, {Component} from 'react';
import NavBar from './navbar';
import down from '../img/down.svg';

// todo: form validation
// todo: animation for down arrow
// todo: add availability to change login form to sign up
class FirstScreen extends Component {

    scroll = () => {
        let height = document.documentElement.clientHeight;
        window.scroll({
            top: height,
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        return (
                <div className="first-screen flex-column justify-content-between">
                    <NavBar/>
                    <div className="flex flex-column align-items-center">
                        <h1 className="display-1 text-muted">LIT</h1>
                        <h2 className="display-4 text-muted mb-6">Welcome to Chaos World</h2>
                    </div>
                    <img src={down} alt="Down" className="icon down-icon ml-auto mr-auto mb-4"
                    onClick={this.scroll}/>
                </div>
        );
    }
}

export default FirstScreen;
