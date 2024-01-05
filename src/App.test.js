import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const button = screen.getByText(/push me please/i);
  expect(button).toBeInTheDocument();
});
