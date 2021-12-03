import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Bar.io app', () => {
  render(<App />);
  const headerTitle = screen.getByText(/Bar.io/i);
  expect(headerTitle).toBeInTheDocument();
});
