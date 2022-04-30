import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders join our list', () => {
  render(<App />);
  const linkElement = screen.getByText(/join our/i);
  expect(linkElement).toBeInTheDocument();
});
test('Submit Order button is disabled', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Submit Order/i });
  expect(buttonElement).not.toBeEnabled();
  const checkboxElement = screen.getByRole('checkbox', { name: /Accept terms and conditions/i });
  expect(checkboxElement).not.toBeChecked();
});
test('Submit Order button is enabled', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Submit Order/i });
  expect(buttonElement).not.toBeEnabled();
  const checkboxElement = screen.getByRole('checkbox', { name: /Accept terms and conditions/i });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
}
)

