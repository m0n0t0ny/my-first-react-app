import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Conteggio: ${count}`;
    console.log("Ciao da use effect");
  }, [count]);
  //[]=caricamento componente
  //nulla= ad ogni render del componente

  return (
    <div>
      <p>Conteggio:{count}</p>
      <button onClick={() => setCount(count + 1)}> Incrementa</button>
    </div>
  );
}

export default Example;
