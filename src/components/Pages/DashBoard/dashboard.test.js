import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Dashboard from './dashboard';
import TitleBar from '../../commonComponents/titleBar/titleBar';
import Collections from '../Collections/collections';
import PersonPinIcon from '@mui/icons-material/PersonPin';

test('renders all tabs from props', () => {
    const tabs = [
        { label: "revalu.io*", component: <TitleBar /> },
        { label: "Materials", component: <div>Materials</div> },
        { label: "Elements", component: <div>Elements</div> },
        { label: "Projects", component: <div>Projects</div> },
        { label: "Manufactures", component: <div>Manufactures</div> },
        { label: "Collection", component: <Collections /> },
        { label: "", component: <PersonPinIcon /> },
      ];
      
      const { getByText } = render(<Dashboard />);
  
    tabs.slice(0, -1).forEach(tab => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  
    expect(screen.getByTestId(/PersonPinIcon/i)).toBeInTheDocument(); // img for icon
  });

  test('renders TitleBar component for the first tab', () => {
    const { getByText } = render(<Dashboard />);
  
    expect(screen.getByTestId(/revalu/i)).toBeInTheDocument(); // Regex for partial match
  });