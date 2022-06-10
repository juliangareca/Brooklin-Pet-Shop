import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartWidget.css';


const Carrito = () => {

    const { cartListItems } =useContext(CartContext)

    console.log("esto es Carrito: ", cartListItems)

    return (

        
        <div className="contenedor">  
           

                <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" width="20" height="20" color="white" fill="currentColor" className="bi bi-cart-fill " viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {cartListItems.map( (item) => {
                            return(
                        
                                <div className="card" style={{flexFlow: "nowrap"}} key={item.id}>
                                <img src={item.img} style={{width: "120px"}} className="card-img-top" alt="imagen del petshop" />
                                <div className="card-body">
                                  <h5 className="card-title">{item.producto}</h5>
                                  <p className="card-text">{item.precio}</p>
                                </div>
                                <button type="button" className="btn btn-danger">-</button>
                              </div>
                      
                             )
                        })} 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Carrito