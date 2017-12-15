import React, {Component} from 'react';
import FirstScreen from './components/first-screen';
import SignUpForm from './components/sign-up-form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FirstScreen/>
                <SignUpForm/>
            </div>
        );
    }
}

export default App;
