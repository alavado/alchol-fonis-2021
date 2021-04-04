import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import rolesQuery from '../../../../graphql/queries/roles'
import './ListaPacientes.css'

const ListaPacientes = () => {

  const { data, loading, error } = useQuery(rolesQuery)

  console.log(data)

  return (
    <div className="ListaPacientes">
      lista de pacientes
      <Link to="/pacientes/agregar">Nuevo paciente</Link>
    </div>
  )
}

export default ListaPacientes
