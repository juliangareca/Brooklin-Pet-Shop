import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const titulo = "Amplia variedad de productos a un click de distancia"
const subtitulo = "AHORA 12 y AHORA 18"
const pagos = "Todos los medios de pago"


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={titulo} subtitulo={subtitulo} pagos={pagos}/>
    </div>
  );

}

export default App;
