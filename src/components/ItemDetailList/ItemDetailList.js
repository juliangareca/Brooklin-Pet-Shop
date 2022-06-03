import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";




const ItemDetailList = () => {

    const {category} = useParams()
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

                // setProducts(res)
                productosFilterArray(res)
                console.log(res)
            })
    }, []);


    const productosFilterArray =  (array) =>{

        return array.map( (item) => {
            if(item.descripcion == category) {
                return setProducts(item)
            }
        })

        

    }
    

  

    return (

        <div className="container cardContainer">
        <ItemList products={products}/>
    </div>
    )
}


export default ItemDetailList