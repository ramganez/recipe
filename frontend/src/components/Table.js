import { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const axios = require('axios').default;

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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {

    // Make a request for a user with a given ID
    axios.get('/api/recipe/get')
      .then(function (response) {
        // handle success
        console.log(response);
        setIsLoaded(true);
        setRows(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoaded(true);
        setError(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

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
      
    <pre>{JSON.stringify(rows, undefined, 2)}</pre>
    </TableContainer>

  );
}

