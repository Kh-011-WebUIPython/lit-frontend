import React, {Component} from 'react';
import FirstScreen from './components/first-screen';
import AboutLit from './components/about-lit'
import SignUpForm from './components/sign-up-form';
import NavBar from './components/navbar'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {scrolled: false}
    }

    componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

    componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

    handleScroll = (e) => {
        let height = document.documentElement.clientHeight;
        this.setState({scrolled: window.scrollY > height/2});
    };

    render() {
        return (
            <div className="App">
                <NavBar isFixed={this.state.scrolled}/>
                <FirstScreen/>
                <AboutLit/>
                <SignUpForm/>
            </div>
        );
    }
}

export default App;
