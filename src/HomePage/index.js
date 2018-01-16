import React, { Component } from 'react';

import FirstScreen from './first-screen';
import AboutLit from './about-lit';
import NavBar from './navbar';
import HowToStart from './howto-start';
import AboutDevs from './about-devs';
import FormSection from './form-section';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false }
  }

  componentDidMount = () => window.addEventListener('scroll', this.handleScroll);
  componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);
  handleScroll = (e) => {
    let height = document.documentElement.clientHeight;
    this.setState({ scrolled: window.scrollY > height });
  };

  render() {
    return (
      <div className="App">
        <NavBar isFixed={this.state.scrolled} />
        <FirstScreen />
        <AboutLit />
        <section className="do-smth-grt" />
        <HowToStart />
        <AboutDevs />
        <FormSection />
      </div>
    );
  }
}

export default HomePage;
