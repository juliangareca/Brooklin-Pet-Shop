import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { detalleProducto } from "../../utils/productsMock"
import { useParams } from "react-router-dom"
import productos from "../../utils/productsMock"
import db from "../../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailcontainer = () => {
    
    const {id} = useParams()
    const [detalle, setDetalle] = useState([])

    useEffect(() => {

        getProducts2()
        .then((res) => {
        setDetalle(res)
        // const getItem = () => {
        //     return new Promise((resolve) => {
        //             resolve(detalleProducto)
        //     })
        // }


            // setDetalle(productosFilter)
        });
    
       
    }, [id]);

    const getProducts2 = async () => {
        const docRef = doc(db, "productos", id)
        const docSnapShot = await getDoc(docRef)
        let product = docSnapShot.data()
        product.id = docSnapShot.id
        return product
    }

    // const productosFilter =  productos.find( (producto) =>{
    //     return producto.id == id
    // })

    return (


        <>

            <ItemDetail info={detalle} />

        </>
    )
}

export default ItemDetailcontainer