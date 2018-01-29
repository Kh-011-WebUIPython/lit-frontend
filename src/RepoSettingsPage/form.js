import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { repoActions } from '../_actions';
import ConfirmModal from '../_components/confirm-modal';

import RenderField from '../_components/render-field';

class RepoSettingsForm extends Component {
  submit(values, dispatch, props) {
    const { id, name } = props;
    const { description } = values;
    const data = { name, id, description };
    dispatch(repoActions.update(data));
  }

  render() {
    const { handleSubmit, updating, _delete } = this.props;
    return (
      <Form className="w-100 w-md-50" onSubmit={handleSubmit(this.submit)}>
        <Field
          id="description"
          name="description"
          type="text"
          component={RenderField}
          label="Repository description"
          required="True"
          autoFocus="True"
        />
        <Button color="primary" type="submit">Update</Button>
        { updating &&
        <img alt="spinner" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10607/spinner3.gif" /> }
        <ConfirmModal _delete={_delete} />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  updating: state.repoUpdate.updating,
});

const ConnectedRepoSettingsForm = connect(mapStateToProps)(reduxForm({ form: 'repoSettings' })(RepoSettingsForm));

export default ConnectedRepoSettingsForm;
