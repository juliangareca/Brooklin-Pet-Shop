import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";

const Item = ({ producto }) => {

  const [loading, setLoading] = useState(true)
  const { addProductToCart } = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  const loader = () => {
    return (

      <SkeletonTheme color="gray" highlightColor="black">
      <div className="card card-style">
        <Skeleton height={290} />
        <div className="card-body">
          <h5 className="card-title"><Skeleton/></h5>
          <p className="card-text"><Skeleton/></p>
          <p className="card-text"><Skeleton/></p>
        </div>
      </div>
      </SkeletonTheme>
    )
  }

  if (loading) {
    return (
      loader()
    )
  }
  else {



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
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
            <button className="btn btn-primary" onClick={() => addProductToCart(producto)}>
            Agregar al carrito
            </button>
          </div>
          <button type="button" className="btn btn-outline-dark ">
            <Link to={"/item/" + producto.id}>Mas detalles</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default Item;
