import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] =useState([])
    console.log("esto es CartListItem: ",cartListItems)
    
    const addProductToCart = (product) =>{
        console.log("Esto es la prueba: ", product.id)  
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        
        console.log("isInCart: ", isInCart)
        if(!isInCart){
            setCartListItems(cartListItems => [...cartListItems, product ])
        }
        console.log("Se agrego el producto en CartContext: ", product)
    }

    const deleteItem = (id) => {
        const auxProductCart = cartListItems.filter(prod => prod.id !== id)
        setCartListItems(auxProductCart)
        
    }

    const cleanCart = () => setCartListItems([])

    // const totalCart = () => {
    //     return array1.reduce((acc, item) => acc += item.quantity, 0)
    //   }

    // const totalCart = () => {
    //     return array1.reduce((acc, item) => acc + item.price * item.quantity, 0)
    //   }
      
      

    const data = {
        cartListItems,
        addProductToCart,
        deleteItem,
        cleanCart
    }
    console.log("Esto es el CartContext: ", cartListItems)

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}
