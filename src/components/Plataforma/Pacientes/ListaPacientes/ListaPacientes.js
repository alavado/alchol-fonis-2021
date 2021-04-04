import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import usersQuery from '../../../../graphql/queries/users'
import './ListaPacientes.css'

const ListaPacientes = () => {

  const { data, loading, error } = useQuery(usersQuery,
    { variables: { role: '60691be847ed5666b559e70f' },
    fetchPolicy: 'no-cache'
  })

  if (loading) {
    return 'Cargando...'
  }

  return (
    <div className="ListaPacientes">
      <h2>Seleccione un paciente</h2>
      {data.users.map((paciente, i) => (
        <div className="ListaPacientes__fila" key={`fila-paciente-${i}`}>
          <Link to={`/pacientes/${paciente.id}`}>
            <div>{paciente.peso}</div>
            <div>{paciente.sexo}</div>
          </Link>
        </div>
      ))}
      <Link to="/pacientes/agregar">Nuevo paciente</Link>
    </div>
  )
}

export default ListaPacientes
