import { useState } from 'react'

import './App.css'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'
interface item{
  nombre:string
  descripcion:string
  precio:number
}
function App() {
  
  const [produc, setProduc] = useState<Array<item>>([])
  const [total, setTotal] = useState(0)
  return (
    <>
    <aside><Formulario calcular={setTotal}setproduc={setProduc}/></aside>

     <main><Listado product={produc} calcular={setTotal} total={total}/></main> 
    </>
  )
}

export default App
