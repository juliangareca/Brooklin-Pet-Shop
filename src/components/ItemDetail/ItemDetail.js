import "./ItemDetail.css";
import ItemCount from "../ItemCountt/ItemCount";
import { useContext, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CartContext from "../../context/CartContext";



const ItemDetail = ({ info }) => {

    const [loading, setLoading] = useState(true)
    const { addProductToCart } = useContext(CartContext)

    useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
      }, 2000)
    },[])
    
    const loader = () => {
        return (
            <SkeletonTheme color="gray" highlightColor="black">
            <div className="card mb-3 contenedorDetalles">
                <div className="row g-4">
                    <div className="col-md-4">
                        <Skeleton height={290} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title"><Skeleton/></h2>
                            <h4 className="card-text"><small className="text-muted"><Skeleton/></small></h4>
                            <p className="card-text"><small className="text-muted"><Skeleton/></small></p>
                            <p className="card-text"><small className="text-muted"><Skeleton/></small></p>
                        </div>
                    </div>
                </div>
            </div>
            </SkeletonTheme>
        )
    }

    if(loading){
        return(
            loader()
        )
    }

    else{

        function onAdd(count) {

            addProductToCart( {data:info, quantity: count})
        }




    return (

        <div className="card mb-3 contenedorDetalles">
            <div className="row g-4">
                <div className="col-md-4">
                    <img src={info.img} className=" rounded-start img-detail" alt="Imagen" />
                </div>
                <div className="col-md-8 align">
                    <div className="card-body">
                        <h2 className="card-title">{info.producto}</h2>
                        <h4 className="card-text"><small className="text-muted">{info.tipo}</small></h4>
                        <p className="card-text"><small className="text-muted">Precio: ${info.precio}</small></p>
                        <p className="card-text"><small className="text-muted">Stock: {info.stock}</small></p>
                        <ItemCount stock={info.stock} product={info} onAdd={onAdd}  />
                    </div>
                </div>
            </div>
        </div>


    )}
}

export default ItemDetail