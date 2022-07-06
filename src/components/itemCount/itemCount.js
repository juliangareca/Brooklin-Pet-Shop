import "./ItemCount.css"
import { useState } from "react";


const ItemCount = ({stock, onAdd}) => {
  

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


  return (
      

        <div className="button-container">
          <button  type="button" className="button" onClick={restCount} disabled={count === 0}>
            -
          </button>
          <p>{count}</p>
          <button  type="button" className="button" onClick={addCount} >
            +
          </button>
          <button className="btn btn-primary" onClick={() => { onAdd(count) }}>
              Agregar al carrito
          </button>

        </div>
        

    
  );
};

export default ItemCount;