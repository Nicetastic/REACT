import './App.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'

export const CartContext = React.createContext([])

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path= "/" element= {<ItemListContainer/>} />
          <Route path= "/category/:id" element= {<ItemListContainer/>} />
          <Route path= "/item/:id" element= {<ItemDetailContainer/>} />
          <Route path= "/cart" element= {<Cart/>} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App