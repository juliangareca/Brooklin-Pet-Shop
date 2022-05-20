import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={"Amplia variedad de productos a un click de distancia"} subtitulo={"AHORA 12 y AHORA 18"} pagos={"Todos los medios de pago"}/>
    </div>
  );
}

export default App;
