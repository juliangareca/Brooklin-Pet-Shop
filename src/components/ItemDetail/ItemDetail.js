import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const ItemDetail = ({ info }) => {
    const [showButton, setShowbutton] = useState(false)
    const [loading, setLoading] = useState(true)

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

        console.log(`Agregaste ${count} "${info.producto}" al carrito`)
        setShowbutton(true)
    }

    return (

        <div className="card mb-3 contenedorDetalles">
            <div className="row g-4">
                <div className="col-md-4">
                    <img src={info.img} className="img-fluid rounded-start" alt="Imagen" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{info.producto}</h2>
                        <h4 className="card-text"><small className="text-muted">{info.tipo}</small></h4>
                        <p className="card-text"><small className="text-muted">Precio: {info.precio}</small></p>
                        <p className="card-text"><small className="text-muted">Stock: {info.stock}</small></p>
                        {!showButton ? <ItemCount stock={info.stock} onAdd={onAdd} setShowbutton={setShowbutton} />
                            :
                            <Button variant="outlined"><Link to="/cart">Terminar mi compra</Link></Button>}
                    </div>
                </div>
            </div>
        </div>


    )}
}

export default ItemDetail