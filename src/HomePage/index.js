import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FirstScreen from './HomePage/first-screen';
import AboutLit from './HomePage/about-lit'
import NavBar from './HomePage/navbar';
import AboutDevs from './HomePage/about-devs';
import FormSection from './HomePage/form-section';
import HowBegin from './HomePage/howto-start'


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {scrolled: false}
    }

    componentDidMount = () => window.addEventListener('scroll', this.handleScroll);

    componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);

    handleScroll = (e) => {
        let height = document.documentElement.clientHeight;
        this.setState({scrolled: window.scrollY > height});
    };

    render() {
        return (
            <div className="App">
                <NavBar isFixed={this.state.scrolled}/>
                <FirstScreen/>
                <AboutLit/>
                <section className="do-smth-grt"></section>
                <HowBegin/>
                <AboutDevs/>
                <FormSection/>
            </div>
        );
    }
}

export default HomePAge;
