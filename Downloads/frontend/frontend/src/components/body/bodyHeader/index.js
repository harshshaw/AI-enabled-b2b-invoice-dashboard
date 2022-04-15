import React from "react";
import AddDialog from "./addDialog";
import DeleteDialog from "./deleteDialog";
import EditDialog from "./editDialog";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@material-ui/core";
import AdvanceSearch from "./advanceSearch";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Predict } from "./predict";
import RefreshIcon from "@material-ui/icons/Refresh";
import { AnalyticsView } from "./analyticsView";

const BodyHeader = (props) => {
  console.log(props.currentRow);
  return (
    <div className="parentBodyHeader">
      <ButtonGroup>
        <Predict currentRow={props.currentRow} />
        <AdvanceSearch adv_Search={props.adv_Search} />
        <AnalyticsView />
      </ButtonGroup>

      <Button 
        variant="outlined"
        onClick={() => window.location.reload(false)}
        className="refreshBtn"
        >
        <RefreshIcon/>
        </Button>

      <TextField
        type="search"
        variant="outlined"
        label="Search Customer Id"
        onChange={(e) => props.searchItems(e.target.value)}
        className="searchBox"
        size="small"
      />

      <ButtonGroup className="btnGrp">
        <AddDialog />
        <EditDialog currentRow={props.currentRow} select={props.select} />
        <DeleteDialog currentRow={props.currentRow} select={props.select} />
      </ButtonGroup>
    </div>
  );
};

export default BodyHeader;
