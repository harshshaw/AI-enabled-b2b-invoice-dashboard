import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'

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

const EditDialog = (props) => {
  const classes = useStyles();

  console.log(props.currentRow);
  console.log(props.select);

  const [inv_curr, set_inv_curr] = useState("");
  const [cust_pay_terms, set_cust_pay_terms] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUpdate = (e) => {
    if(props.select.length > 1){
      alert("Multiple Row Selected");
    }else{
      e.preventDefault();

      const url = `/editData?sl_no=${props.select[0]}&invoice_currency=${inv_curr}&cust_payment_terms=${cust_pay_terms}`;

      try {
        axios.post(url).then((res) => console.log(res.data.Data));
      } catch (err) {
        console.log(err);
      }
    }
    setOpen(false);
  };

  const handleClose = (e) => {
    e.preventDefault();

    console.log(inv_curr, cust_pay_terms);
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
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  name="inv_curr"
                  variant="outlined"
                  label="Invoice Currency"
                  onChange={(e) => set_inv_curr(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="cust_pay_terms"
                  variant="outlined"
                  label="Customer Payment Terms"
                  onChange={(e) => set_cust_pay_terms(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleUpdate}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            EDIT
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
