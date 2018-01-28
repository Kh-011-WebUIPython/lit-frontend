import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const RenderField = ({
  id, input, label, type, name, required,
}) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input name={name} type={type} id={id} required={required} {...input} />
  </FormGroup>
);

export default RenderField;
