import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] =useState(JSON.parse(localStorage.getItem("products")) || [])
  
    const addProductToCart = (product) =>{

        if(isInCart(product)){

            const productRepeatInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
            const qty = productRepeatInCart.quantity

            productRepeatInCart.quantity = qty + product.quantity

            const cartListUpdate = [...cartListItems]
            setCartListItems(cartListUpdate)
            localStorage.setItem("products", JSON.stringify(cartListUpdate))
        } else {
            localStorage.setItem("products", JSON.stringify([...cartListItems, product ]))
            setCartListItems([...cartListItems, product ])
        }
    }

    const deleteItem = (id) => {
        const auxProductCart = cartListItems.filter(prod => prod.data.id !== id)
        localStorage.setItem("products", JSON.stringify(auxProductCart))

        setCartListItems(auxProductCart)   
    }

    const cleanCart = () => {
        localStorage.setItem("products", JSON.stringify([]))

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
