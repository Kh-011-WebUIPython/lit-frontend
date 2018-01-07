import React, {Component} from 'react';
import {Alert, Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {alertActions, userActions} from "../_actions";
import {Field, reduxForm} from "redux-form";


const renderField = ({id, input, label, type, name}) => (
    <FormGroup>
        <Label for={id}>{label}</Label>
        <Input name={name} type={type} id={id} {...input} required={type === 'password'}/>
    </FormGroup>
);

class UserSettingsForm extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        dispatch(alertActions.clear());
    }

    submit(values, dispatch) {
        const userData = {avatar: values.avatar, email: values.email, password: values.password};
        dispatch(userActions.update(userData));
    }

    render() {
        const {handleSubmit, updating, alert} = this.props;
        const message = alert.message && (alert.message.toString() === 'Bad Request' ?
            'Sorry, password is incorrect' : 'OMG, something\'s got wrong');
        return (
            <Form className="w-50" onSubmit={handleSubmit(this.submit)}>
                {alert.message && <Alert color="danger">{message}</Alert>}
                <Field
                    id="email"
                    name="email"
                    type="email"
                    component={renderField}
                    label="E-mail"
                />
                <Field
                    id="avatar"
                    name="avatar"
                    type="text"
                    component={renderField}
                    label="Avatar"
                />
                <Field
                    id="password"
                    name="password"
                    type="password"
                    component={renderField}
                    label="Please, enter your password"
                />
                <Button color="primary" type="submit">Confirm</Button>
                {updating &&
                <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif"/>}
            </Form>
        );
    }
}

export default reduxForm({form: 'userSettings'})(UserSettingsForm);