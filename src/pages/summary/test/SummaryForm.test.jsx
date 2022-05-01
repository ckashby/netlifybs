import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../SummaryForm';

test('Checkbox to be unchecked, click enables/disables submit button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(submitButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(submitButton).toBeDisabled();

});