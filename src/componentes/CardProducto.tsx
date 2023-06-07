interface Props{
  product:{
    nombre:string
  descripcion:string
  precio:number
  }

}

const CardProducto = ({product}:Props) => {
  return (
    <div className='card'>
      <h3>{product.nombre}</h3>
      <p> {product.descripcion}</p>
      <h3>{product.precio}</h3>
      <div className='botonera'>
        <button>-</button>
        <p> 2</p>
        <button>+</button>
      </div>
    </div>
  )
}

export default CardProducto