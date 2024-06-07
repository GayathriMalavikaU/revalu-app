import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Dashboard with Materials Tab', () => {
  render(<App />);
  expect(screen.getAllByText(/Materials/i)[0]).toBeInTheDocument();
});

