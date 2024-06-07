import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "./cards.css";

const Cards = ({ collectionName, collectionDescription, onDelete }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDelete = () => {
    onDelete(collectionName); // Pass collection name for deletion
    setOpenDeleteModal(false);
  };
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);

  return (
    <Grid item>
      <Card className="card">
        <CardContent>
          <Grid className="cardHeader">
            <Button
              variant="contained"
              className="button"
              endIcon={<CloudDownloadIcon />}
            >
              Download data
            </Button>
            <Grid className="numberIcon">
              <Typography variant="body2">87</Typography>
              <IconButton size="small" onClick={handleOpenDeleteModal}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid className="cardContent">
            <Typography variant="h6" component="Grid">
              {collectionName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {collectionDescription}
            </Typography>
          </Grid>
          <Dialog
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            data-testid="deleteDialog">
            <DialogTitle>Delete Collection</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete "{collectionName}"?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDeleteModal(false)} data-testid="cancel">Cancel</Button>
              <Button variant="contained" color="error" onClick={handleDelete} data-testid="deleteCollection">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cards;
