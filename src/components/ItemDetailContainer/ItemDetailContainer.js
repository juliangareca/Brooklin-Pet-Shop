import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailcontainer = () => {
    
    const {id} = useParams()
    const [detalle, setDetalle] = useState([])

    useEffect(() => {

        getProducts2()
        .then((res) => {
        setDetalle(res)
        });
    
       
    }, [id]);

    const getProducts2 = async () => {
        const docRef = doc(db, "productos", id)
        const docSnapShot = await getDoc(docRef)
        let product = docSnapShot.data()
        product.id = docSnapShot.id
        return product
    }


    return (


        <>

            <ItemDetail info={detalle} />

        </>
    )
}

export default ItemDetailcontainer