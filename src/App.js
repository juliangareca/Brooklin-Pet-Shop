import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Detalle from './pages/Detalle';
import ItemDetailList from './components/ItemDetailList/ItemDetailList';
import { CartProvider } from './context/CartContext';
import CarritoFinal from './pages/Cart';




function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/items/:category' element={<ItemDetailList/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
            <Route exact path='/nosotros' element={<Nosotros/>}/>
            <Route exact path='/item/:id' element={<Detalle/>}/>
            <Route exact path='/Cart' element={<CarritoFinal/>}/>
            <Route exact path='*' element={<div>Error 404 - Página no encontrada</div>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );

}

export default App;
