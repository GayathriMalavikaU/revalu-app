/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import TitleBar from './titleBar.jsx';

test('renders link with correct text and target', () => {
  const { getByText } = render(<TitleBar />);
  
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.revalu.io/');
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('link click triggers navigation', async () => {
    const mockLocation = { href: '', assign: jest.fn() };
    window.location = mockLocation;
  
    const { getByText } = render(<TitleBar />);
  
    await act(async () => {
      fireEvent.click(screen.getByTestId(/revalu/i));
    });
  
    expect(mockLocation.assign).toHaveBeenCalledTimes(1);
    expect(mockLocation.assign).toHaveBeenCalledWith('https://www.revalu.io/');
  });