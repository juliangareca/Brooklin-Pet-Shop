import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext';
import './Cart.css';
import { addDoc, collection } from "firebase/firestore"
import db from "../../utils/firebaseConfig"




const Cart = () => {

    const { deleteItem, cartListItems, totalCart, cleanCart } = useContext(CartContext)
    const date = new Date()
    const [formValue, setFormValue] = useState({

        nombre: "",
        apellido: "",
        mail: "",
        telefono: "",
        domicilio: "",
        cp: "",
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems
            .map((item) => {
                return {
                    producto: item.data.producto,
                    id: item.data.id,
                    precio: item.data.precio,
                }
            })
        ,
        total: totalCart(),
        date: date.toString()
    })

    const [ordenId, setOrdenId] = useState()
    const navigate = useNavigate()
    const finish = () => {

        navigate('/')
        cleanCart()

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({ ...order, buyer: formValue })
        addFirestore({ ...order, buyer: formValue })

    }
    const [finished, setFinished] = useState()

    const handleChange = (e) => {

        setFormValue({ ...formValue, [e.target.name]: e.target.value })
        setFinished("Yes")

    }
    const addFirestore = async (newOrder) => {
        const orderFirebase = collection(db, "ordenes")
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setOrdenId(orderDoc.id)

    }
    (function () {
        'use strict'

        let forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

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

                                <tr key={item.data.id}>
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
                            <td colSpan="1" style={{ textAlign: "end" }}>Total de tu compra: </td>
                            <td>$ {totalCart()} </td>
                            <td>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    Pagar
                                </button>

                                <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">

                                                {ordenId ? (


                                                    <div>
                                                        <h4>Orden generada con exito: {ordenId} </h4>
                                                        <button onClick={() => finish()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                            Ir al inicio
                                                        </button>

                                                    </div>

                                                ) : (
                                                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustom01" className="form-label">Nombre</label>

                                                            <input type="text" className="form-control" id="validationCustom01" name="nombre" onChange={handleChange} required />
                                                            <div className="valid-feedback">
                                                                Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                                                            <input type="text" className="form-control" id="validationCustom02" onChange={handleChange} name="apellido" required />
                                                            <div className="valid-feedback">
                                                            Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                            Campo incompleto
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustomUsername" className="form-label">Mail</label>
                                                            <div className="input-group has-validation">
                                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                                <input type="text" className="form-control" id="validationCustomUsername" name="mail" onChange={handleChange} aria-describedby="inputGroupPrepend" required />
                                                                <div className="valid-feedback">
                                                                Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                                Campo incompleto
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustom03" className="form-label">Telefono</label>
                                                            <input type="text" className="form-control" id="validationCustom03" name="telefono" onChange={handleChange} required />
                                                            <div className="valid-feedback">
                                                            Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                            Campo incompleto
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustom03" className="form-label">Domicilio</label>                                                        {/* IMPUT!! */}
                                                            <input type="text" className="form-control" id="validationCustom03" name="domicilio" onChange={handleChange} required />
                                                            <div className="valid-feedback">
                                                            Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                            Campo incompleto
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="validationCustom05" className="form-label">CP</label>
                                                            <input type="text" className="form-control" id="validationCustom05" name="cp" onChange={handleChange} required />
                                                            <div className="valid-feedback">
                                                            Cargado!
                                                            </div>
                                                            <div className="invalid-feedback">
                                                            Campo incompleto
                                                            </div>
                                                        </div>
                                                        {finished ?
                                                            (
                                                                <div className="col-12">
                                                                    <button className="btn btn-primary" type="submit">Finalizar pago</button>
                                                                </div>
                                                            )
                                                            :
                                                            (<p>Completar campos</p>)}


                                                    </form>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    <Link type="button" className="btn btn-secondary btn-lg" to="/" >Ir al inicio</Link>
                </button>
            </div>

        )
    }
}

export default Cart