import './App.css';

import HeaderComponent from './components/Header';
import SearchComponent from './components/Search';
import MenuComponent from './components/Menu';
import TableComponent from './components/Table';

function App() {

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <SearchComponent></SearchComponent>
      <MenuComponent></MenuComponent>
      <TableComponent></TableComponent>
    </div>
  );
}

export default App;
