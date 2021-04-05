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
      <div className="ListaPacientes__superior">
        <p className="ListaPacientes__instruccion">Seleccione paciente</p>
        <Link className="ListaPacientes__link_nuevo_paciente" to="/pacientes/agregar">Nuevo paciente</Link>
      </div>
      {data.users.map((paciente, i) => (
        <Link key={`fila-paciente-${i}`} to={`/pacientes/${paciente.id}`}>
          <div className="ListaPacientes__fila">
            <div>Sexo: {paciente.sexo}</div>
            <div>Peso: {paciente.peso} kg</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListaPacientes
