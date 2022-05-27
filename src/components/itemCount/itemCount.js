import "./ItemCount.css"
import { Button } from "@mui/material";
import { useState } from "react";



const ItemCount = () => {
  console.log()
  const [count, setCount] = useState(1);

  const restCount = () => {
    if(count <= 1){

    } else {
        setCount(count -1)
    }  };
    
  const addCount = () => {

    if (count > 10) {
    } else {setCount(count + 1);
      console.log("agregaste", {count} )
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