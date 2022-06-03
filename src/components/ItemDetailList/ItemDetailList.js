import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";




const ItemDetailList = () => {

    const [products, setProducts] = useState([])
    const {category} = useParams()
    console.log(products)

    useEffect(() => {
        console.log("category: ", category)      
        getProducts()
        .then( (res) => {
                // setProducts(res)
                productosFilterArray(res)

            })
    }, []);
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
            console.log(productos)

        })
    }

    const productosFilterArray =  (array) => {
        return (array.map( (item) => {
            if(item.descripcion == category) {
                return setProducts([item])
            }
        }) )
    }
    

  

    return (

        <div className="container cardContainer">
                <ItemList products={products}/>
        </div>
    )
}


export default ItemDetailList