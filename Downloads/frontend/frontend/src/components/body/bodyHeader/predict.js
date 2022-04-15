import { Button } from '@mui/material'
import React from 'react'


export const Predict = (props) => {
  return (
    <div>
      <Button
        disabled={!props.currentRow}
        variant="contained"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        size="medium"
      >
        Predict
      </Button>
    </div>
  );

 }