import './App.css'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path= "/" element= {<ItemListContainer/>} />
        <Route path= "/category/:id" element= {<ItemListContainer/>} />
        <Route path= "/item/:id" element= {<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}

export default App