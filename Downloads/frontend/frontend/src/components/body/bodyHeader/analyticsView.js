import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

export const AnalyticsView = (props) => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [start_cl_date, set_start_cl_date] = useState(new Date());
  const [end_cl_date, set_end_cl_date] = useState(new Date());
  const [start_due_date, set_start_due_date] = useState(new Date());
  const [end_due_date, set_end_due_date] = useState(new Date());
  const [start_base_date, set_start_base_date] = useState(new Date());
  const [end_base_date, set_end_base_date] = useState(new Date());
  const [curr, setCurr] = useState(new Date());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Submit");
    //console.log(cl_date);
    handleClose();
  };
  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "white", paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
        size="medium"
        onClick={handleClickOpen}
      >
        Analytics View
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        // aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Analytics View</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={5}>
              <Grid item>
                <p>Clear Date</p>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_start_cl_date(e.target.value)}
                />
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_end_cl_date(e.target.value)}
                />
              </Grid>
              <Grid item>
                <p>Due Date</p>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_start_due_date(e.target.value)}
                />
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_end_due_date(e.target.value)}
                />
              </Grid>
              <Grid item>
                <p>Baseline Create Date</p>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_start_base_date(e.target.value)}
                />
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  type="date"
                  className={classes.txtBox}
                  onChange={(e) => set_end_base_date(e.target.value)}
                />
              </Grid>
              <Grid item>
                <p>Invoice Currency</p>
                <TextField
                  name="inv_curr"
                  variant="outlined"
                  label="Invoice Currency"
                  size="small"
                  onChange={(e) => setCurr(e.target.value)}
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
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
