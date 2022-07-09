import ItemCount from "../ItemCountt/ItemCount.js";
import "./Item.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";


const Item = ({ producto }) => {
  const { addProductToCart } = useContext(CartContext)

  const [loading, setLoading] = useState(true)


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
            <h5 className="card-title"><Skeleton /></h5>
            <p className="card-text"><Skeleton /></p>
            <p className="card-text"><Skeleton /></p>
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
      addProductToCart( {data:producto, quantity: count})
    }

    return (
      <div className="card card-style card-manual">
        <img src={producto.img} className="card-img-top item-img" alt="imagen del petshop" />
        <div className="card-body body-height">
          <h5 className="card-title">{producto.producto}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">${producto.precio}</p>
          <div className="button-container">
          <ItemCount stock={producto.stock}  product={producto} onAdd={onAdd}/>
          </div>
          <button type="button" className="border-container padding ">
            <Link to={"/item/" + producto.id} className="border">Mas detalles</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default Item
