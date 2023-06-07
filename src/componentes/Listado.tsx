
import CardProducto from './CardProducto'
interface Props{
  product:Array<item>

}
interface item{
  nombre:string
  descripcion:string
  precio:number
}
const Listado = ({product}:Props) => {

  return (
    <div>
      <div className='titulo'>
      <h2>Listado</h2>
     
      <span> <img src="" alt="imag" />Total</span>
    </div>
    <section className='cardprod'>
      {product.map((elemento)=>(
        <CardProducto key={elemento.nombre} product={elemento}/>
      ))}
      

    </section>

    </div>
  )
}

export default Listado