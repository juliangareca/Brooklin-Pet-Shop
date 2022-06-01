import "./ItemDetail.css";
import ItemCount from "../itemCount/itemCount";


const ItemDetail = ({ info, onAdd }) => {



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
                            <button type="button" className="btn btn-dark">COMPRAR</button>

                            {/* <p className="card-text">A description goes in here</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
       

    )
}

export default ItemDetail