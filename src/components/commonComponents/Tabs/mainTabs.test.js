import { render, screen, fireEvent } from '@testing-library/react';
import MainTabs from './mainTabs.jsx';
test('renders horizontal tabs with correct labels', () => {
    const displayTabs = [
      { label: 'Tab 1', component: <div>Content 1</div> },
      { label: 'Tab 2', component: <div>Content 2</div> },
    ];
    render(<MainTabs displayTabs={displayTabs} alignment="horizontal" />);
  
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Tab 2/i)).toBeInTheDocument();
  });

  test('renders vertical tabs with correct labels', () => {
    const displayTabs = [
      { label: 'Tab 1', component: <div>Content 1</div> },
      { label: 'Tab 2', component: <div>Content 2</div> },
    ];
    render(<MainTabs displayTabs={displayTabs} alignment="vertical" />);
  
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Tab 2/i)).toBeInTheDocument();
  });

  test('renders initial tab content', () => {
    const displayTabs = [
      { label: 'Tab 1', component: <div>Content 1</div> },
      { label: 'Tab 2', component: <div>Content 2</div> },
    ];
    render(<MainTabs displayTabs={displayTabs} alignment="horizontal" />);
  
    expect(screen.getByText(/Content 1/i)).toBeInTheDocument();
  });

  test('switches tab content on change', () => {
    const displayTabs = [
      { label: 'Tab 1', component: <div>Content 1</div> },
      { label: 'Tab 2', component: <div>Content 2</div> },
    ];
    render(<MainTabs displayTabs={displayTabs} alignment="horizontal" />);
  
    fireEvent.click(screen.getByRole('tab', { name: /Tab 2/i }));
  
    expect(screen.getByText(/Content 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Content 1/i)).not.toBeInTheDocument();
  });

  test('handles missing tab components', () => {
    const displayTabs = [
      { label: 'Tab 1', component: <div>Content 1</div> },
      { label: 'Tab 2' },
    ];
    render(<MainTabs displayTabs={displayTabs} alignment="horizontal" />);
  
    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();
  });