import "./ItemCount.css"
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";


const ItemCount = ({stock, product}) => {
  
  const { addProductToCart } = useContext(CartContext)

  const [count, setCount] = useState(1);
  const restCount = () => {
    if(count > 1){
      let counter = count -1 
      setCount(counter)
    } 
  };
    
  const addCount = () => {

    if (count < stock) {
      let counter = count +1
      setCount(counter)
    }   
  };
  function onAdd() {
      
    addProductToCart(product)
    console.log(`Agregaste ${count} ${product.producto} al carrito`)
  }


  return (
      

        <div className="button-container">
          <Button onClick={restCount} disabled={count === 0}>
            -
          </Button>
          <p>{count}</p>
          <Button onClick={addCount} >+</Button>
          <button className="btn btn-primary" onClick={() => { onAdd(
            
          ) }}>
              Agregar al carrito
          </button>

          {/* <AddToCart product={product} count={count}/> */}
        </div>
        

    
  );
};

export default ItemCount;