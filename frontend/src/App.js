import { useState, useEffect } from 'react';

import './App.css';

import HeaderComponent from './components/Header';
import SearchComponent from './components/Search';
import MenuComponent from './components/Menu';
import TableComponent from './components/Table';

function App() {
  const [rows, setRows] = useState([]);

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <SearchComponent setRows={setRows}></SearchComponent>
      <MenuComponent setRows={setRows}></MenuComponent>
      <TableComponent rows={rows} setRows={setRows} ></TableComponent>
    </div>
  );
}

export default App;
