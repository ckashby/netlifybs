import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SummaryForm } from '../SummaryForm';

test('Checkbox to be unchecked, click enables/disables submit button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  const submitButton = screen.getByRole('button', { name: 'Confirm order' });
  expect(submitButton).toBeDisabled();
  userEvent.click(checkbox);
  expect(submitButton).toBeEnabled();
  userEvent.click(checkbox);
  expect(submitButton).toBeDisabled();
});

// Test and code Terms and Conditions bootstrap popover
test('popover responds to hover', () => {
  render(<SummaryForm />);
  // popover starts out hidden
  expect(screen.queryByText('Terms and conditions')).not.toBeInTheDocument();

  // popover appears on hover of checkbox label

  // popover disappears on click of checkbox label


});




// Test and code Summary Textarea


// Test and code Summary Form submit button