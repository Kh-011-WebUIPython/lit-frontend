import React, {Component} from 'react';
import NavBar from './navbar';
import down from '../img/down.svg';

class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {scrolled: false}
    }

    handleScroll = (e) => {
        // height that need to be scrolled
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        console.log(1);
        if (e.srcElement.body.scrollTop >= 100) {this.setState({scrolled: true})} else this.setState({scrolled: false});

    };

    render() {
        return (
                <div className="first-screen flex-column justify-content-between" onScroll={this.handleScroll}>
                    <NavBar scrolled={this.state.scrolled}/>
                    <div className="flex flex-column align-items-center">
                        <h1 className="display-1 text-muted">LIT</h1>
                        <h2 className="display-4 text-muted mb-6">Welcome to Chaos World</h2>
                    </div>
                    <img src={down} alt="Down" className="icon down-icon ml-auto mr-auto mb-4"/>
                </div>
        );
    }
}

export default FirstScreen;
