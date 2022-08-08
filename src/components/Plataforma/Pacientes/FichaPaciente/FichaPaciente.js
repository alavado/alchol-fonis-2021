import { useQuery } from '@apollo/client'
import { differenceInYears, formatDistanceToNow, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
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

  const paciente = data.user

  return (
    <div className="FichaPaciente">
      <p>Paciente {id}</p>
      <p>Sexo: {paciente.sexo}</p>
      <p>Peso: {paciente.peso} kg</p>
      <div>Edad: {differenceInYears(Date.now(), parseISO(paciente.fechaNacimiento))} años</div>
      <div>Registrado: hace {formatDistanceToNow(parseISO(paciente.createdAt), { locale: es })}</div>
      <Link className="FichaPaciente__boton" to={`/registro/nuevo/${id}`}>Comenzar registro</Link>
    </div>
  )
}

export default FichaPaciente
