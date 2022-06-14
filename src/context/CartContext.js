import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] =useState([])
    
    const addProductToCart = (product) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        console.log("isInCart: ", isInCart)
        if(!isInCart){
            setCartListItems(cartListItems => [...cartListItems, product])
        }
        // setCartListItems(cartListItems => [...cartListItems, product])
        console.log("Se agrego el producto: ", product)
    }


    const data = {
        cartListItems,
        addProductToCart
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
