import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { alertActions, repoActions } from '../_actions';


const renderField = ({
  id, input, label, type, name,
}) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input name={name} type={type} id={id} {...input} required={type === 'text'} />
  </FormGroup>
);

class CreateRepoForm extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  submit(values, dispatch) {
    const data = { name: values.name, description: values.description };
    dispatch(repoActions.create(data));
  }

  render() {
    const { handleSubmit, updating, alert } = this.props;
    const message = alert.message && 'OMG, something\'s got wrong';
    return (
      <Form className="w-50" onSubmit={handleSubmit(this.submit)}>
        {alert.message && <Alert color="danger">{message}</Alert>}
        <Field
          id="name"
          name="name"
          type="text"
          component={renderField}
          label="Repository name"
        />
        <Field
          id="description"
          name="description"
          type="textarea"
          component={renderField}
          label="Repository description"
        />
        <Button color="primary" type="submit">Confirm</Button>
        <Button color="secondary" type="reset" className="ml-2">Cancel</Button>
        {updating &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" />}
      </Form>
    );
  }
}

export default reduxForm({ form: 'createRepo' })(CreateRepoForm);
