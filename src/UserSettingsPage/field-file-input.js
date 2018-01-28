import React, { Component } from 'react';
import { Input, Label, FormGroup } from 'reactstrap';

export default class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      id, label, type, name,
    } = this.props;

    return (
      <FormGroup><Label for={id}>{label}</Label>
        <Input
          name={name}
          type={type}
          id={id}
          accept=".jpg, .png, .jpeg"
          onChange={this.onChange}
        />
      </FormGroup>
    );
  }
}
