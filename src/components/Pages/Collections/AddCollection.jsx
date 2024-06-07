import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import NewCollectionForm from "./newCollectionForm";

const AddCollection = ({ open, onClose, onSubmit }) => {
  console.log("add props1", open, onClose, onSubmit);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Collection</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {" "}
          <NewCollectionForm onSubmit={onSubmit} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCollection;
