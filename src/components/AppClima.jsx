import Formulario from "./Formulario"
import Resultados from "./Resultados"
import useClima from "../hooks/useClima"
const AppClima = () => {

  const {resultado } = useClima()
  
  return (
    <>
    <main className='dos-columnas'>
        <Formulario/>

      {resultado.name &&  <Resultados/> }
       
    </main>
    
    </>
  )
}

export default AppClima
