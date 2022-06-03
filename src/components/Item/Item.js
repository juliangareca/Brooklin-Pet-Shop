import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  function onAdd(count) {

    console.log(`Agregaste ${count} ${producto.producto} al carrito`)

  }

  return (
    <div className="card card-style">
      <img src={producto.img} className="card-img-top" alt="imagen del petshop" />
      <div className="card-body">
        <h5 className="card-title">{producto.producto}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">{producto.precio}</p>
        <div className="button-container">
          <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
        <button type="button" className="btn btn-outline-dark ">
          <Link to={"/item/" + producto.id}>Mas detalles</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
