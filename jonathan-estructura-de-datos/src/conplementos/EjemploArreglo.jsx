import { useEffect, useState } from "react";

function EjemploArreglo() {
    //iniciamos con un estado para un arreglo
      const [elementos, setElementos]=useState([]);
    
      //crear fución para agregar datos
      const agregarDato=()=>{
        const nuevoNumero=Math.floor(Math.random()*50);
        setElementos([...elementos, nuevoNumero]);
      }
    
      //Metodo para recorrer el arreglo
      const recorrerArreglo=(elementos, index)=>(
        <li key={index} style={{margin: `5px 0`, fontsize:`18px`}}>
          Elemento #{index+1}: <strong>{elementos}</strong>
        </li>
      )
    
      //Hook de efecto
      useEffect(()=>{
      console.log("El arreglo de datos actual es: ", elementos);
    
      },[elementos])
  return (

    <div>
      <h1>Mi primer arreglo de datos</h1>
      <div style={{padding:`20px`}}>
        <h2>paso 1. Agregar datos al arreglo</h2>
        <button onClick={agregarDato}>Agregar número aleatorio</button>
        <ul>
          {elementos.map(recorrerArreglo)}

          {/*Si e arreglo esta vasio enviar un mensaje */}

          {elementos.length===0? (
            <>
              <p>Aún no hay elementos en e larreglo</p>
              <p>Precione el botón agregar datos</p>
            </>
          ):elementos.map(recorrerArreglo)}
        </ul>
        </div>
    </div>
  )
}

export default EjemploArreglo
