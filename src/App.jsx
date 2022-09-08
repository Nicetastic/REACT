import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer texto= "Coderhouse" />
    </div>
  );
}

export default App