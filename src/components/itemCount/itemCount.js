import "./ItemCount.css"
import { useState } from "react";


const ItemCount = ({ stock, onAdd }) => {


  const [count, setCount] = useState(1);
  const restCount = () => {
    if (count > 1) {
      let counter = count - 1
      setCount(counter)
    }
  };

  const addCount = () => {

    if (count < stock) {
      let counter = count + 1
      setCount(counter)
    }
  };


  return (


    <div className="button-container row">
      <div className="count">
        <button type="button" className="button" onClick={restCount} disabled={count === 0}>
          <h3> - </h3>
        </button>
        <p>{count}</p>
        <button type="button" className="button" onClick={addCount} >
          <h3> + </h3>
        </button>
      </div>
      <div>
        <button className="btn btn-primary" style={{marginTop: "25px" }} onClick={() => { onAdd(count) }}>
          Agregar al carrito
        </button>
      </div>
    </div>



  );
};

export default ItemCount;