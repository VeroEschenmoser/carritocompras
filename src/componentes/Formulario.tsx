import { useState, useEffect } from 'react'
interface Props{
  setproduc:React.Dispatch<React.SetStateAction<item[]>>
  calcular:React.Dispatch<React.SetStateAction<number>>
}
interface item{
  nombre:string
  descripcion:string
  precio:number
}
const Formulario = ({setproduc,calcular}:Props) => {
  /* const [producto, setProducto] = useState<item>()

  const [nombre, setNombre]= useState("")
  const [descripcion, setDescripcion]= useState("")
  const [precio, setPrecio]= useState("") */

  const [inputValues, setInputValues] = useState({
    nombre:"",
    descripcion:"",
    precio:0
  })

  function cargaproducto (e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(inputValues)
    setproduc(produc => ([...produc, inputValues]))
    setInputValues({
      nombre:"",
      descripcion:"",
      precio:0
    })
    calcular(1*inputValues.precio)
  }
  
  

function onChange (e:React.ChangeEvent<HTMLInputElement>){
 setInputValues({...inputValues,[e.target.id]: e.target.value})
  console.log(e.target.value)
}
  return (
    <form className='cardformulario' onSubmit={cargaproducto}>
      <h2> Cargar Productos</h2>
      <div className='compform'>
      <input type="text" id='nombre' defaultValue={inputValues.nombre} onChange={onChange} required/>
      <label htmlFor="nombre"> Nombre del producto</label>
      <input type="text" id='descripcion' defaultValue={inputValues.descripcion} onChange={onChange}/>
      <label htmlFor=""> Descripcion (opcional)</label>
      <input type="number" id='precio' min={0} defaultValue={inputValues.precio} onChange={onChange} required/>
      <label htmlFor="">Precio</label>
      </div>
      
      <button> Agregrar Producto</button>
    </form>

  )
}

export default Formulario