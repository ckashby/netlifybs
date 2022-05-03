import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const checkboxLabel = (
    <span>
      I agree to the <span style={{ color: 'blue' }}>terms and conditions.</span>
    </span>
  );
  const changeSubmitButton = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <h3>Summary Form</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email label</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label={checkboxLabel}
            onClick={changeSubmitButton}
          />
          <Form.Text className="text-muted">Do not worry</Form.Text>
        </Form.Group>
        <Button className="btn btn-primary" disabled={isDisabled}>
          Confirm order
        </Button>
      </Form>
      <hr />
    </div>
  );
};