import ItemCount from "../itemCount/itemCount";
import "./Item.css";


const Item = ({producto}) => {

  return (
    <div className="card card-style">
      <img src={producto.img} className="card-img-top" alt="imagen del petshop" />
      <div className="card-body">
        <h5 className="card-title">{producto.producto}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">{producto.precio}</p>
        <div className="button-container">
          <ItemCount stock={producto.stock}/>
         
        </div>
        <a href="somewere" className="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
