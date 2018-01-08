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
            <div className="flex w-100 align-items-center justify-content-between mb-4">
                <img src={logo} alt="LIT logo" className="logo-image mr-1"/>
                <Form className="search">
                    <FormGroup>
                        <Input name="seacrh" type="text" className="mt-2"
                               placeholder="search"
                               onChange={this.handleInputChange}/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Search;

