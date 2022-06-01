import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import productos from "../../utils/productsMock"
const ItemListContainer = ({ titulo, subtitulo, pagos }) => {

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