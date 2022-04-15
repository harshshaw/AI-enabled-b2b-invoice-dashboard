import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: "60rem !important",
    backgroundColor: "#2A3E4C !important",
    color: "#FFFFFF !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
    width: "100% !important",
  },
}));

const AddDialog = (props) => {
  const classes = useStyles();

  const [bus_code, set_bus_code] = useState("");
  const [cust_num, set_cust_num] = useState("");
  const [clear_date, set_clear_date] = useState(new Date());
  const [bus_year, set_bus_year] = useState("");
  const [doc_id, set_doc_id] = useState("");
  const [post_date, set_post_date] = useState(new Date());
  const [doc_create_date, set_doc_create_date] = useState(new Date());
  const [due_date, set_due_date] = useState(new Date());
  const [inv_curr, set_inv_curr] = useState("");
  const [doc_type, set_doc_type] = useState("");
  const [post_id, set_post_id] = useState("");
  const [tot_open_amt, set_tot_open_amt] = useState("");
  const [base_create_date, set_base_create_date] = useState(new Date());
  const [cust_pay_terms, set_cust_pay_terms] = useState("");
  const [inv_id, set_inv_id] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `/addData?business_code=${bus_code}&cust_number=${cust_num}&clear_date=${clear_date}&buisness_year=${bus_year}&doc_id=${doc_id}&posting_date=${post_date}&document_create_date=${doc_create_date}&due_in_date=${due_date}&invoice_currency=${inv_curr}&document_type=${doc_type}&posting_id=${post_id}&total_open_amount=${tot_open_amt}&baseline_create_date=${base_create_date}&cust_payment_terms=${cust_pay_terms}&invoice_id=${inv_id}`;

    try {
      axios.post(url).then((res) => console.log(res.data.Data));
    } catch (err) {
      console.log(err);
    }

    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        onClick={handleClickOpen}
        size="medium"
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Add</DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={3}>
                <TextField
                  name="bus_code"
                  variant="outlined"
                  label="Business Code"
                  size="small"
                  onChange={(e) => set_bus_code(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="cust_num"
                  variant="outlined"
                  label="Customer Number"
                  size="small"
                  onChange={(e) => set_cust_num(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  label="Clear Date"
                  size="small"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={(e) => set_clear_date(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="bus_year"
                  variant="outlined"
                  label="Business Year"
                  size="small"
                  onChange={(e) => set_bus_year(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="doc_id"
                  variant="outlined"
                  label="Document ID"
                  size="small"
                  onChange={(e) => set_doc_id(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="post_date"
                  variant="outlined"
                  label="Post Date"
                  size="small"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={(e) => set_post_date(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  label="Document Create Date"
                  size="small"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={(e) => set_doc_create_date(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="due_date"
                  variant="outlined"
                  label="Due Date"
                  size="small"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={(e) => set_due_date(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="inv_curr"
                  variant="outlined"
                  label="Invoice Currency"
                  size="small"
                  onChange={(e) => set_inv_curr(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="doc_type"
                  variant="outlined"
                  label="Document Type"
                  size="small"
                  onChange={(e) => set_doc_type(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="post_id"
                  variant="outlined"
                  label="Posting ID"
                  size="small"
                  onChange={(e) => set_post_id(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="tot_open_amt"
                  variant="outlined"
                  label="Total Open Amount"
                  size="small"
                  onChange={(e) => set_tot_open_amt(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="base_create_date"
                  variant="outlined"
                  label="Baseline Create Date"
                  size="small"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={(e) => set_base_create_date(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="cust_payment_terms"
                  variant="outlined"
                  label="Customer Payment Terms"
                  size="small"
                  onChange={(e) => set_cust_pay_terms(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="inv_id"
                  variant="outlined"
                  label="Invoice ID"
                  size="small"
                  onChange={(e) => set_inv_id(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDialog;
