import "./ItemCount.css"
import { Button } from "@mui/material";
import { useState } from "react";



const ItemCount = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count > 4) {
    } else {setCount(count + 1);
    }
  };

  const restCount = () => {
    setCount(count - 1);
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