import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import productos from "../../utils/productsMock"


const ItemListContainer = ({ titulo, subtitulo, pagos }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
    
        const getProducts = () => {
            return new Promise((resolve) => {
                    resolve(productos)  
            })
        }
        getProducts().then((res) => {

                setProducts(res)
       
            })
    }, []);

    return (

        <div>
            <div className="pagos">
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <h3>{pagos}</h3>
            </div>
            <div className="container cardContainer">
                <ItemList products={products}/>
            </div>

        </div>

    )


}

export default ItemListContainer