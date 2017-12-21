import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

class UserSettingsForm extends Component {

    constructor() {
        super()
        this.state = {tags: []}
    }

    handleChange(tags) {
        this.setState({tags})

    }

    clickInput = () => {
        this.refs.file_upload.click()
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
            <div>
                <h2 className="mb-2">Settings</h2>
                <Form>
                    <FormGroup>
                        <Label className="mb-1">Email</Label>
                        <Input name="email"
                               type="text"
                               onChange={this.handleInputChange}/>
                    </FormGroup>


                    <FormGroup>
                        <Label className="mb-1">Avatar</Label><br/>
                        <button className="btn btn-primary"
                                onClick={this.clickInput}>Change avatar
                        </button>
                        <input type="file" className="file_upload"
                               ref="file_upload"/>
                    </FormGroup>

                    <FormGroup>
                        <Label className="mb-1">Background</Label><br/>
                        <button className="btn btn-primary"
                                onClick={this.clickInput}>Change background
                        </button>
                        <input type="file" className="file_upload"
                               ref="file_upload"/>

                    </FormGroup>

                    <Label className="mt-4"><Button
                        color="primary">Confirm</Button></Label>

                </Form>
            </div>

        );
    }
}

export default UserSettingsForm;