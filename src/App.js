import React, {Component} from 'react';
import FirstScreen from './components/first-screen';
import AboutLit from './components/about-lit'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FirstScreen/>
                <AboutLit />
            </div>
        );
    }
}

export default App;
