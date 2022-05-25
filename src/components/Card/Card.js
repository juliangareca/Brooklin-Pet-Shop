import ItemCount from "../itemCount/itemCount";
import "./Card.css";

const Card = ({producto, descripcion, stock}) => {


  return (
    <div className="card card-style">
      <img src="./Brokling.jpeg" className="card-img-top" alt="imagen del petshop" />
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="button-container">
          <ItemCount/>
        </div>
        <a href="somewere" className="btn btn-primary">
          Mas detalles
        </a>
      </div>
    </div>
  );
};

export default Card;
