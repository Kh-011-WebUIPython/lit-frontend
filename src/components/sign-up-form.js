import React, {Component} from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': '',
            'email': '',
            'password': '',
            'rPassword': '',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form className="w-50 ml-auto mr-auto p-5">
                <div className="form-group">
                    <label>Username</label>
                    <input name="username" type="text" className="form-control" onChange={this.handleInputChange}
                           required="True"/>
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input name="e-mail" type="email" className="form-control" onChange={this.handleInputChange}
                           required="True"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" onChange={this.handleInputChange}
                           required="True" />
                </div>
                <div className="form-group">
                    <label>Repeat password</label>
                    <input name="rPassword" type="password" className="form-control" onChange={this.handleInputChange}
                           required="True"/>
                </div>
                <button className="btn btn-dark" type="submit">Sign Up</button>
            </form>
        );
    }
}

export default SignUpForm;
