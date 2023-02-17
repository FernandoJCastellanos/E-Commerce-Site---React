// Environment
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS
import './App.css';


// // Components
import NavBar from './NavBar';
import ProductPage from './ProductPage';
import ShopContextProvider from './shop-context';





function App() {
  return (
    <main className="App">
      <ShopContextProvider>
        <Router>
          <NavBar className="App-header" />
          <ProductPage />
          </Router>
      </ShopContextProvider>
    </main>
  );
}
export default App;