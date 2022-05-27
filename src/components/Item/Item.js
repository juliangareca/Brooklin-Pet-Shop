import ItemCount from "../itemCount/itemCount";
import "./Item.css";

const Item = ({producto, descripcion,precio}) => {


  return (
    <div className="card card-style">
      <img src="./Brokling.jpeg" className="card-img-top" alt="imagen del petshop" />
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{precio}</p>
        <div className="button-container">
          <ItemCount/>
        </div>
        <a href="somewere" className="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
