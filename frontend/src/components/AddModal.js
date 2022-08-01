import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';


export default function AddRecipe(props) {
  return (
    <Dialog
      open={props.open}
      handleClose={props.handleClose}
      onClose={(_, reason) => reason === 'backdropClick' && props.handleClose()}
    >
      <DialogTitle id="responsive-dialog-title">
        Add Your Recipe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tell us about your recipe - Description, Type, Cooking Time and etc...
        </DialogContentText>
        <Box component="span" sx={{
          '& .MuiTextField-root': { m: 1, width: '28ch' },
        }}>
          <div>
            <TextField label="Description" required helperText="Desc: Mutton Curry" />
            <TextField label="Type" required helperText="Type: Curry / Main Dish" />
            <TextField label="Cook Time" helperText="Use the format: 4d 6h 45m." />
            <TextField label="Nutrition" required helperText="Nutrition 100g: Protine 11.96g, Fat 5.86g" error={false} />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          style={{ 'color': '#646464', 'borderColor': '#646464', 'backgroundColor': 'transparent' }}
        >
          Cancle
        </Button>
        <Button
          onClick={props.handleClose}
          autoFocus={true}
          style={{ 'color': '#646464', 'borderColor': '#646464', 'backgroundColor': 'transparent' }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>

  )
}
