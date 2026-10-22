import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the to-do list heading', () => {
  render(<App />);
  expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
});
