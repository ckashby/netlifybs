import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders join our list', () => {
  render(<App />);
  const linkElement = screen.getByText(/join our/i);
  expect(linkElement).toBeInTheDocument();
});
test('expect popover to not be in document', () => {
  render(<App />);
  const popButton = screen.getByRole('button', { name: /Hover to see Popover/i });
  expect(popButton).toBeInTheDocument();
  expect(screen.queryByText(/Popover right/i)).not.toBeInTheDocument();
  userEvent.hover(popButton);
  expect(screen.getByText(/Popover right/i)).toBeInTheDocument();
  });




