import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

class UserSettings extends Component {

    constructor() {
        super()
        this.state = {tags: []}
    }

    handleChange(tags) {
        this.setState({tags})

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
            <aside className="flex flex-column h-100 p-4 s-dark">
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
                            <label class="btn btn-primary">
                                Browse&hellip; <input type="file" d-none/>
                            </label>
                        </FormGroup>

                        <FormGroup>
                            <Label className="mb-1">Background</Label><br/>
                            <Button color="primary">Change background</Button>

                        </FormGroup>

                        <Label className="mt-4"><Button
                            color="primary">Confirm</Button></Label>

                    </Form>
                </div>
            </aside>
        );
    }
}

export default UserSettings;