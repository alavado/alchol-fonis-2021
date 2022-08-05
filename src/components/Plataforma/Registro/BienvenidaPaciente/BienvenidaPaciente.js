import { Link, useRouteMatch } from 'react-router-dom'
import './BienvenidaPaciente.css'

const BienvenidaPaciente = () => {
  
  const { idPaciente } = useRouteMatch().params

  return (
    <div className="BienvenidaPaciente">
      <p>Muchas gracias por su tiempo para esta investigación</p>
      <p>Por favor rellene el siguiente calendario de consumo de alcohol</p>
      <Link className="BienvenidaPaciente__boton" to={`/registro/nuevo/${idPaciente}/confirmacion`}>
        Comenzar
      </Link>
    </div>
  )
}

export default BienvenidaPaciente