import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders join our list', () => {
  render(<App />);
  const linkElement = screen.getByText(/join our/i);
  expect(linkElement).toBeInTheDocument();
});



