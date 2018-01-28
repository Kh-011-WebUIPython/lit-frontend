import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import { alertActions, repoActions } from '../_actions';
import RenderField from '../_components/render-field';

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
      <Form className="w-100 w-md-50" onSubmit={handleSubmit(this.submit)}>
        {alert.message && <Alert color="danger">{message}</Alert>}
        <Field
          id="name"
          name="name"
          type="text"
          component={RenderField}
          label="Repository name"
          required="True"
        />
        <Field
          id="description"
          name="description"
          type="textarea"
          component={RenderField}
          label="Repository description"
          required="False"
        />
        <Button color="primary" type="submit">Confirm</Button>
        <Link to="/">
          <Button color="secondary" type="reset" className="ml-2">Cancel</Button>
        </Link>
        {updating &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" />}
      </Form>
    );
  }
}

export default reduxForm({ form: 'createRepo' })(CreateRepoForm);
