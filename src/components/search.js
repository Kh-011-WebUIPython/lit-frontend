import React, {Component} from 'react';
import logo from '../logo.svg';
import {Form, FormGroup, Input} from 'reactstrap';

class Search extends Component {

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
            <div className="search flex">
                <img src={logo} alt="LIT logo" className="logo-image"/>
                <Form className="ml-auto mr-auto">
                    <FormGroup>
                        <Input name="seacrh" type="text"
                               placeholder="seacrh"
                               onChange={this.handleInputChange}/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Search;

