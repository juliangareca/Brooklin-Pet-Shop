import Item from "../Item/Item"
import { useState, useEffect } from "react"
import productos from "../../utils/productsMock"

const ItemList = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        
    
        const getProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos)

    
                }, 1000)
    
            })
        }
        getProducts().then((res) => {

                setProducts(res)
       
            })
            .catch((err) => {

                console.log("Respuesta catch:", err)

            })
    }, []);

    return(
    
        products.map( (producto) => {

            return (
             
                    <Item producto={producto} key={producto.id}/>
              
            )
        })
    )
}

export default ItemList