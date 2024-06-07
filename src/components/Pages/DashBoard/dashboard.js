import React from "react";
import TitleBar from "../../commonComponents/titleBar/titleBar";
import MainTabs from "../../commonComponents/Tabs/mainTabs";
import Collections from "../Collections/collections";
import "./dashboard.css";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Grid } from "@mui/material";

const tabs = [
  { label: "Materials", component: <div>Materials</div> },
  { label: "Elements", component: <div>Elements</div> },
  { label: "Projects", component: <div>Projects</div> },
  { label: "Manufactures", component: <div>Manufactures</div> },
  { label: "Collection", component: <Collections /> },
];

function Dashboard() {
  return (
    <Grid >
      <TitleBar />
      <MainTabs displayTabs={tabs} alignment="horizontal" />
      <PersonPinIcon />
    </Grid>
  );
}

export default Dashboard;
