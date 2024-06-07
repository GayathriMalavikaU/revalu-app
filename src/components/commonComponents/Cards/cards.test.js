import { render, screen, fireEvent } from '@testing-library/react';
import DisplayCards from './cards';

test('renders card with collection name and description', () => {
    render(<DisplayCards collectionName="My Collection" collectionDescription="This is a test collection" />);
  
    expect(screen.getByText(/My Collection/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test collection/i)).toBeInTheDocument();
  });

  test('download button click does not call onDelete', () => {
    const mockOnDelete = jest.fn();
    render(<DisplayCards collectionName="My Collection" onDelete={mockOnDelete} />);
  
    fireEvent.click(screen.getByText(/Download data/i));
  
    expect(mockOnDelete).not.toHaveBeenCalled();
  });

  test('delete icon click opens delete modal', () => {
    render(<DisplayCards collectionName="My Collection" />);
  
    fireEvent.click(screen.getByTestId(/DeleteIcon/i));
  
    expect(screen.getByText(/Delete Collection/i)).toBeInTheDocument();
  });
  