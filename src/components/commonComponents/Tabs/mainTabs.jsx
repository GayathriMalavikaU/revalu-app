import React, { useState } from "react";
import { Tabs, Tab, Box, styled } from "@mui/material";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import './style.css';

const HorizontalTabs = styled(Tabs)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const VerticalTabs = styled(Tabs)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const MainTabs = ({ displayTabs, alignment }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {alignment === "horizontal" && (
        <HorizontalTabs
          className="tabsAlign"
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {displayTabs.map((tab, index) => (
            <Tab key={index} value={index} 
              icon={index === displayTabs.length - 1 ?<PersonPinIcon/> :tab.label}
            />
          ))}
        </HorizontalTabs>
      )}
      {alignment === "vertical" && (
        <VerticalTabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          orientation="vertical"
        >
          {displayTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} value={index} />
          ))}
        </VerticalTabs>
      )}
      {displayTabs[value].component}
    </Box>
  );
};

export default MainTabs;
