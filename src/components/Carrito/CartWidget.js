import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartWidget.css';


const Carrito = () => {

    const { cartListItems, deleteItem, cleanCart } = useContext(CartContext)

    console.log("esto es Carrito: ", cartListItems)

    return (


        <div className="contenedor">


            <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" width="20" height="20" color="white" fill="currentColor" className="bi bi-cart-fill " viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cartListItems.map((item) => {
                                return (

                                    <div className="card" style={{ flexFlow: "nowrap", marginBottom: "10px" }} key={item.id}>
                                        <img src={item.img} style={{ width: "120px" }} className="card-img-top" alt="imagen del petshop" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.producto}</h5>
                                            <p className="card-text">{item.precio}</p>
                                        </div>

                                        <button onClick={() => {deleteItem(item.id)}} type="button" className="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg></button>
                                    </div>

                                )
                            })}
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => cleanCart()} type="button" className="btn btn-secondary">Clean</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito