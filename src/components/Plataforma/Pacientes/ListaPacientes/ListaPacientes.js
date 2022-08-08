import { useQuery } from '@apollo/client'
import Icon from '@iconify/react'
import { Link } from 'react-router-dom'
import usersQuery from '../../../../graphql/queries/users'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'
import './ListaPacientes.css'
import { differenceInYears, formatDistanceToNow, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

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
            <div>Paciente {data.users.length - i}</div>
            <Icon className="ListaPacientes__icono_fila" icon={iconoSiguiente} />
            <div>Sexo: {paciente.sexo}</div>
            <div>Peso: {paciente.peso} kg</div>
            <div>Edad: {differenceInYears(Date.now(), parseISO(paciente.fechaNacimiento))} años</div>
            <div>Registrado: hace {formatDistanceToNow(parseISO(paciente.createdAt), { locale: es })}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListaPacientes
