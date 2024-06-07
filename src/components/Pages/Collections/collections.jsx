import React, { useState } from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import MainTabs from "../../commonComponents/Tabs/mainTabs";
import CollectionData from "./mockData";
import DisplayCards from "../../commonComponents/Cards/cards";
import AddCollection from "./AddCollection";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css';

const Collections = () => {
  const [openModal, setOpenModal] = useState(false);
  const [collectionData, setCollectionData] = useState(CollectionData);
  const [showCollections, setShowCollections] = useState(true);

  const handleOpenModal = () => {
    setShowCollections(false);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setShowCollections(true);
    setOpenModal(false);
  };

  const handleAddCollection = (newCollection) => {
    console.log(
      "handleAddCollection",
      openModal,
      collectionData,
      newCollection
    );
    setCollectionData([...collectionData, newCollection]);
    setOpenModal(false);
    setShowCollections(true);
  };
  const handleDeleteCollection = (collectionName) => {
    setCollectionData(
      collectionData.filter(
        (collection) => collection.collectionName !== collectionName
      )
    );
  };

  const tabs = [
    // { label: "MyCollections", component: <div></div> },
      { //Not closing
       label : (
          <span>
            My Collection <ChevronLeftIcon />
          </span>
        ),
        component:
        (
        <div></div>
        ),
     },
    {
      // list is showing
      label: "New Collection",
      component: (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          size="small"
        >
          + Add Collection
        </Button>
      ),
    },
    // {//OnClick not working
    //   label: 'New Collection',
    //   onClick:handleOpenModal
    // },
  ];

  return (
    <div className="container">
      <Grid className="main-section">

        <Grid className="addNewCollections">
          {openModal && (
            <Grid className="new-collection-section">
              <AddCollection
                open={openModal}
                onClose={handleCloseModal}
                onSubmit={handleAddCollection}
              />
            </Grid>
          )}
          <MainTabs displayTabs={tabs} alignment="vertical" />
        </Grid>

        <Grid className="collectionsDaata">
        <Grid>
    <h1>Collections</h1>
    <p>
      Introducing Collections Your Access to organise your materials your
      way
    </p>
  </Grid>

  <Grid className="show-cards">
    {showCollections && (
      <Grid style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {collectionData &&
            collectionData.map((collection) => {
              return (
                <Grid item>
                  <DisplayCards
                    collectionName={collection.collectionName}
                    collectionDescription={collection.description}
                    onDelete={handleDeleteCollection}
                  />
                </Grid>
              );
            })}
          <Card className="card">
            <CardContent className="addbtnbg">

              <AddCircleOutlineIcon onClick={handleOpenModal} className="addbtn" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )}
  </Grid>

        </Grid>
      </Grid>


    </div>
  );
};

export default Collections;


