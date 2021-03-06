import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Options from '../Options';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  // make sure the subtotal is 0
  const scoopsSubtotal = screen.getByText('Scoops Subtotal: $', {
    exact: false,
  });
  expect(scoopsSubtotal).toHaveTextContent('0.00');
  
  // update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});
