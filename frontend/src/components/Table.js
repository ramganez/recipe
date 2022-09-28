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

export default function TableComponent(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    // Make a request for a user with a given ID
    axios.get('/api/recipe/get')
      .then(function (response) {
        // handle success
        setIsLoaded(true);
        props.setRows(response.data);
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
          {props.rows.map((row) => (
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

