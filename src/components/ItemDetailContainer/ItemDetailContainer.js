import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { detalleProducto } from "../../utils/productsMock"
import { useParams } from "react-router-dom"
import productos from "../../utils/productsMock"




const ItemDetailcontainer = () => {
    
    const {id} = useParams()
    const [detalle, setDetalle] = useState([])

    useEffect(() => {


        const getItem = () => {
            return new Promise((resolve) => {
                    resolve(detalleProducto)
            })
        }


        getItem().then((res) => {
            setDetalle(res)
            setDetalle(productosFilter)
        });
    
       
    }, []);

    const productosFilter =  productos.find( (producto) =>{
        return producto.id == id
    })

    return (


        <>

            <ItemDetail info={detalle} />

        </>
    )
}

export default ItemDetailcontainer