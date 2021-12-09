import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders the Bar.io app', () => {
  render(<App />);
  const headerTitle = screen.getByRole('app-title');
  
  expect(headerTitle).toBeVisible();
});
