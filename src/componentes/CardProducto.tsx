import { useState } from "react"

interface Props{
  product:{
    nombre:string
  descripcion:string
  precio:number
  }
 calcular:React.Dispatch<React.SetStateAction<number>>
}

const CardProducto = ({product, calcular}:Props) => { 
  const [cantidad, setCantidad] = useState(1)
function mas (){
setCantidad(cantidad+1)
calcular(()=>(cantidad+1)*product.precio)
}

function menos (){
  if (cantidad >=0){
  setCantidad(cantidad-1)}
calcular(()=>(cantidad-1)*product.precio)
}


  return (
    <div className='card'>
      <h3>{product.nombre}</h3>
      <p> {product.descripcion}</p>
      <h3>{product.precio}</h3>
      <div className='botonera'>
        <button onClick={menos}>-</button>
        <p>{cantidad}</p>
        <button onClick={mas}>+</button>
      </div>
    </div>
  )
}

export default CardProducto