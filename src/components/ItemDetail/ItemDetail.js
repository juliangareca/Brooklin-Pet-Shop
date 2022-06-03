import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
    

const ItemDetail = ({ info }) => {

    function onAdd(count) {

        console.log(`Agregaste ${count} "${info.producto}" al carrito`)
    
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
                            <ItemCount stock={info.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
       

    )
}

export default ItemDetail