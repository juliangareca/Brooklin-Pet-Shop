import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";



const ItemDetailList = () => {
    
    const [products, setProducts] = useState([])
    const {category} = useParams()
   
    
    useEffect(() => {
        setProducts([])
        getProducts()
        .then( (res) => {
            setProducts(productosFilterArray(res))
            
        })
    }, [category]);
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
            
        })
    }
    

    const productosFilterArray =  (array) => {

        const productosFiltrados = array.filter( (item) => {
            if(item.descripcion == category) {
                return item
            }
        }) 

        console.log("esto es el array: ", array)
        return productosFiltrados
    }
    
    
    
    
    return (
        
        <div className="container cardContainer">
                <ItemList products={products}/>
        </div>
    )
    console.log(ItemDetailList())
}


export default ItemDetailList