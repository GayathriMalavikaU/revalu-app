import { render, screen, fireEvent } from '@testing-library/react';
import TitleBar from './titleBar.jsx';

const mockLocation = { href: '', assign: jest.fn() }

test('renders link with correct text and target', () => {
    render(<TitleBar />);
  
    expect(screen.getByText(/revalu.io*/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.revalu.io/');
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // test('link click triggers navigation', () => {
  //   window.location = mockLocation;
  
  //   render(<TitleBar />);
  
  //   fireEvent.click(screen.getByText(/revalu.io*/i));

  //   expect(mockLocation.assign).toHaveBeenCalledTimes(1);
  
  //   expect(mockLocation.assign).toHaveBeenCalledWith('https://www.revalu.io/');
  // });