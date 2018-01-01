import React, {Component} from 'react';
import down from '../_img/down.svg';

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
                <div className="flex flex-column align-items-center flex-grow-2 justify-content-center">
                    <h2 className="display-1 text-muted text-cursive text-center">Welcome to chaos World</h2>
                </div>
                <img src={down} alt="Down" className="icon down-icon ml-auto mr-auto mb-4" onClick={this.scroll}/>
            </div>
        );
    }
}

export default FirstScreen;
