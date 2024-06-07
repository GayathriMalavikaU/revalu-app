import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
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
          <NewCollectionForm onClose={onClose} onSubmit={onSubmit} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AddCollection;
