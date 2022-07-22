import { Link, useRouteMatch } from 'react-router-dom'
import './BienvenidaPaciente.css'

const BienvenidaPaciente = () => {
  
  const { idPaciente } = useRouteMatch().params

  return (
    <div className="BienvenidaPaciente">
      <p>Muchas gracias por tomarse unos minutos de su tiempo para esta investigación</p>
      <p>A continuación le realizaremos unas sencillas preguntas sobre su consumo de bebidas que contienen alcohol en la última semana, y luego le entregaremos alguna información</p>
      <Link className="BienvenidaPaciente__boton" to={`/registro/nuevo/${idPaciente}/confirmacion`}>
        Comenzar
      </Link>
    </div>
  )
}

export default BienvenidaPaciente