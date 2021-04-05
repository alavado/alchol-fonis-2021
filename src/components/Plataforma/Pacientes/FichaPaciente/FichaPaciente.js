import { useQuery } from '@apollo/client'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import queryPaciente from '../../../../graphql/queries/user'
import './FichaPaciente.css'

const FichaPaciente = () => {

  const { id } = useRouteMatch().params
  const { data, loading } = useQuery(queryPaciente, { variables: { id } })

  if (loading) {
    return 'Cargando...'
  }

  return (
    <div className="FichaPaciente">
      <p>Paciente {id}</p>
      <p>Sexo: {data.user.sexo}</p>
      <p>Peso {data.user.peso} kg</p>
      <Link className="FichaPaciente__boton" to={`/registro/nuevo/${id}`}>Comenzar registro</Link>
    </div>
  )
}

export default FichaPaciente
