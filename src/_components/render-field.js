import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const RenderField = ({
  autoFocus, id, input, label, type, name, required,
}) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input name={name} type={type} id={id} required={required} autoFocus={id !== 'username1' && autoFocus} {...input} />
  </FormGroup>
);

export default RenderField;
