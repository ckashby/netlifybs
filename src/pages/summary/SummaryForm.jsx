import React, { useState } from 'react';
import { Button, Form, Popover } from 'react-bootstrap';

export const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPopover, setShowPopover] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to the <span style={{ color: 'blue' }}>terms and conditions.</span>
    </span>
  );

  const toggleSubmitButton = () => {
    setIsDisabled(!isDisabled);
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
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
            onClick={toggleSubmitButton}
          />
          <Form.Text className="text-muted">Do not worry</Form.Text>
        </Form.Group>
        <Button className="btn btn-primary" disabled={isDisabled}>
          Confirm order
        </Button>
        <Button className="btn btn-secondary" onClick={togglePopover}>
          Toggle Popover
        </Button>
        {showPopover ? <Popover>Popover</Popover> : null}
      </Form>
      <hr />
    </div>
  );
};
