import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import db from "../../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import Banner from "../Banner/Banner"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
    getProducts2()

    }, []);
    const getProducts2 = async () => {
        const productSnapShot = await getDocs(collection(db, "productos"));
        const productList = productSnapShot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
             return product
        })
        return(
            setProducts(productList)
        )
    }
    return (

        <div>
            <Banner/>
                <h1>Catálogo de productos</h1>
            <div className="container cardContainer">
                <ItemList products={products}/>
            </div>

        </div>

    )


}

export default ItemListContainer