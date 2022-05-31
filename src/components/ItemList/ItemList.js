import Item from "../Item/Item"
import { useState, useEffect } from "react"
import img from "../../assets/Brokling.jpeg"

const productos = [

    {
        producto: "Pelota",
        descripcion: "Gato",
        precio: "$1500",
        stock: 3,
        id: 1,
        img: img
    },
    {
        producto: "Hueso",
        descripcion: "Gato",
        precio: "$1200",
        stock: 12,
        id: 2,
        img: img
    },
    {
        producto: "Pelota 2",
        descripcion: "Perro",
        precio: "$2500",
        stock: 3,
        id: 3,
        img: img
    },
    {
        producto: "Hueso 2",
        descripcion: "Perro",
        precio: "$3500",
        stock: 30,
        id: 4,
        img: img
    },

]

const ItemList = () =>{
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        
    
        const getProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos)
    
    
                }, 2000)
    
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