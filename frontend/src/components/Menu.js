import React from 'react';

import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import AddRecipe from './AddModal';

export default function MenuComponent() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={12} style={{ 'marginTop': '15px', 'marginBottom': '15px' }}>
        <Tooltip title="Add Reciepe" placement="right">
          <Button
            variant='outlined'
            size="small"
            onClick={handleOpen}
            style={{ 'color': '#646464', 'borderColor': '#646464', 'backgroundColor': 'transparent'}}
          >
            Create Reciepe
          </Button>
        </Tooltip>
      </Grid>
      <AddRecipe open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </>
  );
}
