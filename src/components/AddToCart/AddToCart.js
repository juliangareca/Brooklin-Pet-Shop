import { useContext } from "react";
import CartContext from "../../context/CartContext";





const AddToCart = ({ product, count }) => {
    const { addProductToCart, cartListItems, deleteItem, cleanCart } = useContext(CartContext)


    // console.log("esto viene de AddToCart: ", product)
    return (
        <>
            <button onClick={() => {addProductToCart(product, count)}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Add Products
            </button>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        {cartListItems.map((product) => {
                                return (

                                    <div className="card" style={{ flexFlow: "nowrap", marginBottom: "10px" }} key={product.id}>
                                        <img src={product.img} style={{ width: "120px" }} className="card-img-top" alt="imagen del petshop" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.producto}</h5>
                                            <p className="card-text">{product.precio}</p>
                                        </div>

                                        <button onClick={() => {deleteItem(product.id)}} type="button" className="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg></button>
                                    </div>

                                )
                            })}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


        // <button classNameName="btn btn-primary" onClick={() => {addProductToCart(product, count)}}>
        // Agregar al carrito
        //  </button>

    )
}

export default AddToCart