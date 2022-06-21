import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] =useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    
    const addProductToCart = (product) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        
        console.log("cartQuantity: ", cartQuantity)
        console.log("isInCart: ", isInCart)
        if(!isInCart){
            setCartListItems(cartListItems => [...cartListItems, product ])
            // setCartQuantity(cartQuantity => [...cartQuantity, product.quantity])
            setCartQuantity(cartQuantity + product.quantity)
            
        }
        else {

            // ACA ES DONDE DEBERIA DEFINIR LA LOGICA PARA QUE AGREGUE, PERO NO ME ESTARIA SALIENDO

        }
        
    }

    const deleteItem = (id) => {
        const auxProductCart = cartListItems.filter(prod => prod.id !== id)
        setCartListItems(auxProductCart)
        
    }

    const cleanCart = () => {
       
        setCartListItems([])

        setCartQuantity(0)

    }


        
    const totalCart2 = () => {
        return cartListItems.reduce((acc, item) => acc += item.quantity, 0)
      }

      const totalCart = () => {
        return cartListItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }

      

    const data = {
        cartListItems,
        addProductToCart,
        deleteItem,
        cleanCart,
        totalCart2,
        totalCart,
        cartQuantity,
        // total,
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
