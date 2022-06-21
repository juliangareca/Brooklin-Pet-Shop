import { useContext } from "react"
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import './Cart.css';



const Cart = () => {

    const { deleteItem, cartListItems,cleanCart } = useContext(CartContext)
    const cartPrice = cartListItems.reduce((acc, current) => {
        return acc + current.price + current.quantity
    }, 0);

    const totalCart = () => {
        return cartListItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }
    console.log("esto es totalCart: ", totalCart)

    console.log("esto es el cartPrice: ", cartPrice)

    console.log(" esto es CART: ", cartListItems)

    if (cartListItems.length !== 0) {

        return (


            <div className="col-sm-10 cart">
                <table className="table ">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Precio Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartListItems.map((item) => {


                            return (

                                <tr  key={item.id}>
                                    <td>{item.producto}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.precio}</td>
                                    <td>${item.precio * item.quantity}</td>
                                    <td>
                                        <button onClick={() => { deleteItem(item.id) }} type="button" className="btn-close" aria-label="Close"></button>
                                    </td>


                                </tr>
                            )
                        })}
                        <tr>
                            <th scope="row"></th>
                            <th scope="row"></th>
                            <td colSpan="1" style={{textAlign:"end"}}>Total de tu compra: </td>
                            <td>$</td>
                            <td>
                            <button onClick={() => cleanCart()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Pagar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }

    else {
        return (


            <div >
                <h1>Opps.. Parece que no hay productos agregados :/</h1>
                <button type="button" className="btn btn-secondary btn-lg">
                    <Link type="button" className="btn btn-secondary btn-lg" to="/" >Seguir Comprando</Link>
                </button>
            </div>

        )
    }
}

export default Cart