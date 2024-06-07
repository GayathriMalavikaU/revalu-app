import React from "react";
import TitleBar from "../../commonComponents/titleBar/titleBar";
import MainTabs from "../../commonComponents/Tabs/mainTabs";
import Collections from "../Collections/collections";
import "./dashboard.css";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Grid } from "@mui/material";

const tabs = [
  { label: "revalu.io*", component: <TitleBar /> },
  { label: "Materials", component: <div>Materials</div> },
  { label: "Elements", component: <div>Elements</div> },
  { label: "Projects", component: <div>Projects</div> },
  { label: "Manufactures", component: <div>Manufactures</div> },
  { label: "Collection", component: <Collections /> },
  { label: "", component: <PersonPinIcon /> },
];

function Dashboard() {
  return (
    <Grid >
      <MainTabs displayTabs={tabs} alignment="horizontal" />
    </Grid>
  );
}

export default Dashboard;
