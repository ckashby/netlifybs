import { render, screen } from '@testing-library/react';
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
  const nullPopover = screen.queryByText(/no ice cream will be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();
  // popover appears on hover/mouseover of checkbox label
  const tandcText = screen.getByText(/terms and conditions./i);
  userEvent.hover(tandcText);
  // const popover = screen.getByText(/no ice cream will be delivered/i);
  // expect(popover).toBeInTheDocument();

  // popover disappears when mouse leaves checkbox label
  userEvent.unhover(tandcText);
  const nullPopoverAgain = screen.queryByText(/no ice cream will be delivered/i);
  expect(nullPopoverAgain).not.toBeInTheDocument();


});




// Test and code Summary Textarea


// Test and code Summary Form submit button