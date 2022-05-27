import Item from "../Item/Item"
import { useState, useEffect } from "react"



const ItemList = () =>{
    const [products, setProducts] = useState([])
    const productos = [

        {
            producto: "Pelota",
            descripcion: "Gato",
            precio: "$1500",
            stock: 3,
            id: 1
        },
        {
            producto: "Hueso",
            descripcion: "Gato",
            precio: "$1200",
            stock: 12,
            id: 2
        },
        {
            producto: "Pelota 2",
            descripcion: "Perro",
            precio: "$2500",
            stock: 3,
            id: 3
        },
        {
            producto: "Hueso 2",
            descripcion: "Perro",
            precio: "$3500",
            stock: 30,
            id: 4
        },

    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)


            }, 2000)

        })
    }
    useEffect(() => {
        getProducts()
            .then((res) => {

                setProducts(res)
            })

            .catch((err) => {

                console.log("Respuesta catch:", err)

            })
    }, []);

    return(
    
        products.map( (lista) => {
            const {producto, descripcion, precio, id} = lista
            return (
             
                    <Item producto={producto} descripcion={descripcion} precio={precio}  key={id}/>
              
            )
        })
    )
}

export default ItemList