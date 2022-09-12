import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer texto= "Coderhouse" />
      <ItemDetailContainer />
    </div>
  );
}

export default App