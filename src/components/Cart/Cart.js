import { useContext } from "react"
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import './Cart.css';



const Cart = () => {

    const { deleteItem, cartListItems,cleanCart, totalCart } = useContext(CartContext)

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

                                <tr  key={item.data.id}>
                                    <td>{item.data.producto}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.data.precio}</td>
                                    <td>${item.data.precio * item.quantity}</td>
                                    <td>
                                        <button onClick={() => { deleteItem(item.data.id) }} type="button" className="btn-close" aria-label="Close"></button>
                                    </td>


                                </tr>
                            )
                        })}
                        <tr>
                            <th scope="row"></th>
                            <th scope="row"></th>
                            <td colSpan="1" style={{textAlign:"end"}}>Total de tu compra: </td>
                            <td>$ { totalCart() } </td> 
                            <td>
                            <button type="button" className="btn btn-secondary" >Pagar</button>
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