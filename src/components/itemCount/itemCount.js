import "./ItemCount.css"
import { Button } from "@mui/material";
import { useState } from "react";



const ItemCount = ({stock}) => {
  
  const [count, setCount] = useState(1);

  const restCount = () => {
    if(count >= 1){
      let counter = count -1 
      setCount(counter)
    } 
  };
    
  const addCount = () => {

    if (count < stock) {
      let counter = count +1
      setCount(counter)
      console.log("agregaste", {counter})
    }   
  };


  return (
      

        <div className="button-container">
          <Button onClick={restCount} disabled={count === 0}>
            -
          </Button>
          <p>{count}</p>
          <Button onClick={addCount}>+</Button>
  
        </div>
        

    
  );
};

export default ItemCount;