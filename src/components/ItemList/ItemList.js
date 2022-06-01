import Item from "../Item/Item"


const ItemList = ({products}) =>{
    

    return(
    
        products.map( (producto) => {

            return (
             
                    <Item producto={producto} key={producto.id}/>
              
            )
        })
    )
}

export default ItemList