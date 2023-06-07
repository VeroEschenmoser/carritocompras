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
  
  return (
    <>
    <aside><Formulario setproduc={setProduc}/></aside>

     <main><Listado product={produc}/></main> 
    </>
  )
}

export default App
