import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: "#2A3E4C !important",
    color: "#FFFFFF !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));

const DeleteDialog = (props) => {
  const classes = useStyles();
  console.log(props.select);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const url = `deleteData?sl_no=${props.select[0]}`;

    try {
      axios.post(url).then((res) => console.log(res.data.Data));
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        onClick={handleClickOpen}
        disabled={!props.currentRow}
        size="medium"
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Records ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "white" }}
          >
            Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            CANCEL
          </Button>
          <Button
            onClick={handleDelete}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
