import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cats.com/i);
  expect(linkElement).toBeInTheDocument();
});
