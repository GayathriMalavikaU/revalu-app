/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import NewCollectionForm from './newCollectionForm';

test('renders with empty form fields', () => {
    const { getByText } =  render(<NewCollectionForm onSubmit={() => {}} onClose={() => {}} />);
  
    const collectionNameInput = screen.getByText('Collection Name');
    const descriptionInput = screen.getAllByText('Description');
  
    expect(collectionNameInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });

  test('updates state on form input changes', () => {
    const { getByText } =  render(<NewCollectionForm onSubmit={() => {}} onClose={() => {}} />);
  
    const collectionNameInput = screen.getByText('Collection Name');
    const descriptionInput = screen.getAllByText('Description');
  
    fireEvent.change(collectionNameInput, { target: { value: 'My New Collection' } });
    fireEvent.change(descriptionInput, { target: { value: 'A collection of interesting things' } });
  
    expect(screen.getByText('Collection Name').value).toBe('My New Collection');
    expect(screen.getByText('Description').value).toBe('A collection of interesting things');
  });

  test('calls onSubmit prop on form submission', () => {
    const mockOnSubmit = jest.fn();
    render(<NewCollectionForm onSubmit={mockOnSubmit} onClose={() => {}} />);
  
    const submitButton = screen.getByText('Create Collection');
    fireEvent.click(submitButton);
  
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ collectionName: '', description: '' }); // Initial state
  });

  test('resets form fields after submission', () => {
    const mockOnSubmit = jest.fn();
    const { getByText } =  render(<NewCollectionForm onSubmit={mockOnSubmit} onClose={() => {}} />);
  
    const collectionNameInput = screen.getByText('Collection Name');
    const descriptionInput = screen.getAllByText('Description');
  
    fireEvent.change(collectionNameInput, { target: { value: 'My New Collection' } });
    fireEvent.change(descriptionInput, { target: { value: 'A collection of interesting things' } });
  
    fireEvent.click(screen.getByText('Create Collection'));
  
    expect(collectionNameInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });
  test('calls onClose prop on close button click', () => {
    const mockOnClose = jest.fn();
    render(<NewCollectionForm onSubmit={() => {}} onClose={mockOnClose} />);
  
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
  
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });