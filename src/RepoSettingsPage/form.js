import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { repoActions } from '../_actions';

const renderField = ({
  id, input, label, type, name,
}) => (
  <FormGroup>
    <Label for={id}>{ label }</Label>
    <Input name={name} type={type} id={id} {...input} required="True" />
  </FormGroup>
);

class RepositorySettingsForm extends Component {
  submit(values, dispatch, props) {
    const { id, name } = props;
    const { description } = values;
    const data = { name, id, description };
    dispatch(repoActions.update(data));
  }

  render() {
    const { handleSubmit, updating } = this.props;
    return (
      <Form className="ml-auto mr-auto" onSubmit={handleSubmit(this.submit)}>
        { /* { alert.message && <Alert color="danger">{ message }</Alert> } */ }
        <Field
          id="description"
          name="description"
          type="text"
          component={renderField}
          label="Repository description"
        />
        <Button color="primary" type="submit">Update</Button>
        { updating &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" /> }
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  updating: state.repoUpdate.updating,
});

const ConnectedRepositorySettingsForm = connect(mapStateToProps)(reduxForm({ form: 'repoSettings' })(RepositorySettingsForm));

export default ConnectedRepositorySettingsForm;
