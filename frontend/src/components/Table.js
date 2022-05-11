import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function TableComponent() {
  return (
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
            <TableRow key={row.Desc}>
              <TableCell component="th" scope="row">
                {row.Desc}
              </TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
              <TableCell align="right">{row.Nutrition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

