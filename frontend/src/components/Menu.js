import React from 'react';

import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import AddRecipe from './AddModal';

const axios = require('axios').default;

export default function MenuComponent() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/recipe/add', {
      desc: event.target.elements.desc.value,
      type: event.target.elements.type.value,
      cook_time: event.target.elements.cook_time.value,
      nutrition: event.target.elements.nutrition.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });    
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
      <AddRecipe open={open} handleOpen={handleOpen} handleClose={handleClose} handleSubmit={handleSubmit}/>
    </>
  );
}
