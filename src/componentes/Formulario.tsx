import { useState, useEffect } from 'react'
interface Props{
  product:Array<item | undefined>
  setproduc:React.Dispatch<React.SetStateAction<item[]>>
}
interface item{
  nombre:string
  descripcion:string
  precio:string
}
const Formulario = ({product, setproduc}:Props) => {
  /* const [producto, setProducto] = useState<item>()

  const [nombre, setNombre]= useState("")
  const [descripcion, setDescripcion]= useState("")
  const [precio, setPrecio]= useState("") */

  const [inputValues, setInputValues] = useState({
    nombre:"",
    descripcion:"",
    precio:0
  })

  function cargaproducto (e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setproduc({...product, inputValues})
  }
  function cambiararray (elemento:item){
    setproduc([...product,elemento])
  }

  
  

function onChange (e:React.ChangeEvent<HTMLInputElement>){
 setInputValues({...inputValues,[e.target.id]: e.target.value})

}
  return (
    <form className='cardformulario'>
      <h2> Cargar Productos</h2>
      <div className='compform'>
      <input type="text" id='nombreproducto' value={inputValues.nombre} onChange={onChange} required/>
      <label htmlFor="nombreproducto"> Nombre del producto</label>
      <input type="text" id='descripcionproducto' value={inputValues.descripcion} onChange={onChange}/>
      <label htmlFor=""> Descripcion (opcional)</label>
      <input type="number" id='precio' value={inputValues.precio} onChange={onChange} required/>
      <label htmlFor="">Precio</label>
      </div>
      
      <button onSubmit={cargaproducto}> Agregrar Producto</button>
    </form>

  )
}

export default Formulario