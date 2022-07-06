import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"



const ItemDetailList = () => {
    
    const [products, setProducts] = useState([])
    const {category} = useParams()
   
    
    useEffect(() => {
        setProducts([])
        getProducts()

    }, [category]);

    const getProducts = () => {
        return new Promise((resolve) => {
                resolve(getProducts2())
            
        })
    }

    const getProducts2 = async () => {
        const productSnapShot = await getDocs(collection(db, "productos"));
        const productList = productSnapShot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        const productosFiltrados = productList.filter( (item) => {
            if(item.descripcion == category) {
                return item
            }
        }) 
          
        return(
            setProducts(productosFiltrados)
            )
        }
    
    
    
    return (
        
        <div className="container cardContainer">
                <ItemList products={products}/>
        </div>
    )

}


export default ItemDetailList