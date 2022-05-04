import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../SummaryForm';

test('Checkbox to be unchecked, click enables/disables submit button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  const submitButton = screen.getByRole('button', { name: 'Confirm order' });
  expect(submitButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(submitButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(submitButton).toBeDisabled();
});

// Test and code checkbox to be unchecked, click enables/disables submit button


// Test and code Terms and Conditions bootstrap popover


// Test and code Summary Textarea


// Test and code Summary Form submit button