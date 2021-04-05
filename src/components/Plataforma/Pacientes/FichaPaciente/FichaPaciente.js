import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import './FichaPaciente.css'

const FichaPaciente = () => {

  const { id } = useRouteMatch().params

  return (
    <div className="FichaPaciente">
      Paciente {id}
      <Link to={`/registro/nuevo/${id}`}>Comenzar registro</Link>
    </div>
  )
}

export default FichaPaciente
