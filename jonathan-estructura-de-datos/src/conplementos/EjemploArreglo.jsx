//rfce
import { useEffect, useState } from "react"
function EjemploArreglo() {
    //iniciamos con un arrglo
    const [elementos,setElementos]=useState([]);
    
    //crear una funcion para agregar datos
    const agregarDato=()=>{
      const nuevoNumero=Math.floor(Math.random()*50);
      setElementos([...elementos, nuevoNumero]);
    };
    //metodo para recorrer el arreglo
    const recorrerArreglo=(elemento,index)=>(
      <li key={index} style={{margin: '5px 0', fontSize: '18px>'}}>
        Elemento #{index+1}:<strong>{elemento}</strong>
      </li>
    )
      //Hook de efecto 
      useEffect(()=>{
    console.log("El arreglo de datos actual es: ",elementos)
      },[elementos]);
      
  return (
    <>
    <h1>Mi primer arrglo de datos</h1>
    <div style={{padding: '20px'}}>
      <h2>Paso 1. Agregar un dato al arrreglo</h2>
    <button onClick={agregarDato}>Agregar numero aleatorio</button>
    <ul>
      {/*si el arreglo esta vacio enviar un mensaje */}
      {elementos.length==0 ? (
        <>
        <p>Aun no hay elementos en el arreglo</p>
        <p>presiona el boton agregar datos</p>
        </>
      ):(elementos.map(recorrerArreglo))}


    </ul>
    </div>
    </>
  )
}

export default EjemploArreglo