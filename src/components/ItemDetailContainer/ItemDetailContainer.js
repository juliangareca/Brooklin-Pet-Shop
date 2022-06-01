import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { detalleProducto } from "../../utils/productsMock"

const ItemDetailcontainer = () => {

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

        })
            .catch((err) => {

                console.log("Respuesta catch:", err)

            })
    }, []);

    return (


        <>

            <ItemDetail info={detalle} />

        </>
    )
}

export default ItemDetailcontainer