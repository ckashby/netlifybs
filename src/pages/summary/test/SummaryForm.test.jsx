import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../SummaryForm';

test('test checkbox to be unchecked, click enables submit button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeDisabled();
  fireEvent(checkbox, new MouseEvent('click', { bubbles: true }));
  expect(submitButton.disabled).toBe(false);

});