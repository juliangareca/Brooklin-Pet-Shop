import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] =useState([])
  
    const addProductToCart = (product) =>{

        if(isInCart(product)){

            const productRepeatInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
            const qty = productRepeatInCart.quantity

            productRepeatInCart.quantity = qty + product.quantity

            const cartListUpdate = [...cartListItems]
            setCartListItems(cartListUpdate)
            
        } else {

            setCartListItems([...cartListItems, product ])
        }
    }

    const deleteItem = (id) => {
        const auxProductCart = cartListItems.filter(prod => prod.data.id !== id)
        setCartListItems(auxProductCart)   
    }

    const cleanCart = () => {
        setCartListItems([])
    }

    const isInCart = (product) => {
        return cartListItems.some(cartItem => cartItem.data.id === product.data.id)
    }
        
    const totalCart2 = () => {
        return cartListItems.reduce((acc, item) => acc += item.quantity, 0)
    }

    const totalCart = () => {
        return cartListItems.reduce((acc, item) => acc + item.data.precio * item.quantity, 0)
    }


    const data = {
        cartListItems,
        addProductToCart,
        deleteItem,
        cleanCart,
        totalCart2,
        totalCart
    }
    

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}
