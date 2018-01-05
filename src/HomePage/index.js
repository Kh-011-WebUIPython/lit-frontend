import React, {Component} from 'react';

import FirstScreen from './first-screen';
import AboutLit from './about-lit'
import NavBar from './navbar';
import HowToStart from './howto-start'
import AboutDevs from './about-devs';
import FormSection from './form-section';

class HomePage extends Component {
    componentDidMount = () => window.addEventListener('scroll', this.handleScroll);
    componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);
    handleScroll = (e) => {
        let height = document.documentElement.clientHeight;
        this.setState({scrolled: window.scrollY > height});
    };

    constructor(props) {
        super(props);
        this.state = {scrolled: false}
    }

    render() {
        return (
            <div className="App">
                <NavBar isFixed={this.state.scrolled}/>
                <FirstScreen/>
                <AboutLit/>
                <section className="do-smth-grt"></section>
                <HowToStart/>
                <AboutDevs/>
                <FormSection/>
            </div>
        );
    }
}

export default HomePage;
