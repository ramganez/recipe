import './App.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function createData(Desc, Type, Time, Nutrition) {
  return { Desc, Type, Time, Nutrition };
}

const rows = [
  createData('Frozen yoghurt', 'Lunch', '1 Hr', 'protein 10.2g'),
  createData('Ice cream sandwich', 'Breakfast', '50 Min', 'protein 10.2g'),
  createData('Eclair', 'Dinner', '10 Min', 'carbohydrates 3.9g'),
  createData('Cupcake', 'Drinks', '30 Min', 'cholesterol 30.2mg'),
  createData('Gingerbread', 'Salad', '15 Min', '131 calories'),
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Typography align="center" variant="h3" component="h2" gutterBottom>
          RECIPE
        </Typography> */}
      </header>
      <TextField className='Search-Input' align="center" id="outlined-basic" label="Search" variant="outlined" />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Cooking Time</TableCell>
              <TableCell align="right">Nutrition Facts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
