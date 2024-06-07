import React, { useState } from "react";
import { Button,Grid } from "@mui/material";
import { TextField } from "@material-ui/core";
import './style.css'


const NewCollectionForm = ({ onSubmit, onClose }) => {
  console.log("add props", onSubmit);
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ collectionName, description });
    setCollectionName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        required
        variant="outlined"
        className="textField"
      />
  
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        variant="outlined"
        rows={4}
        className="textField"
      />

<Grid className="createbtn">
      <Button variant="text" onClick={onClose}>Close</Button>
      <Button variant="contained" type="submit">Create Collection</Button>
      </Grid>
    </form>
  );
};

export default NewCollectionForm;
