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
                setTimeout(() => {
                    resolve(detalleProducto)
                }, 2000)
            })
        }


        getItem().then((res) => {
            setDetalle(res)
            setDetalle(productosFilter)
        })
            .catch((err) => {

                console.log("Respuesta catch:", err)

            })
    
       
    }, []);

    const productosFilter =  productos.find( (producto) =>{
        return producto.id == id
    })

    // const productosFilterArray =  productos.filter( (producto) =>{
    //     return producto.tipo == category
    // })

    return (


        <>

            <ItemDetail info={detalle} />

        </>
    )
}

export default ItemDetailcontainer