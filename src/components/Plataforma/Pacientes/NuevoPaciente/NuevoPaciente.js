import { useMutation, useQuery } from '@apollo/client'
import rolesQuery from '../../../../graphql/queries/roles'
import registrarPacienteMutation from '../../../../graphql/mutations/registrarPaciente'
import './NuevoPaciente.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { format, parse } from 'date-fns'

const NuevoPaciente = () => {

  const [peso, setPeso] = useState(60)
  const [sexo, setSexo] = useState('M')
  const [fechaNacimiento, setFechaNacimiento] = useState('1990-01-01')

  const { data, loading, error } = useQuery(rolesQuery)
  const [mutateRegistrarPaciente] = useMutation(registrarPacienteMutation)
  const history = useHistory()

  if (loading) {
    return null
  }

  const idRolPaciente = data.roles.find(d => d.name === 'Paciente').id

  const handleSubmit = e => {
    e.preventDefault()
    const u =  'u' + Math.random()
    mutateRegistrarPaciente({
      variables: {
        sexo,
        peso: Number(peso),
        fechaNacimiento,
        username: u,
        password: u,
        email: u + 'u@gmail.com',
        role: idRolPaciente
      }
    })
    .then(() => history.push('/pacientes'))
  }

  return (
    <div className="NuevoPaciente">
      <h2>Ingrese datos paciente</h2>
      <form className="NuevoPaciente__formulario" onSubmit={handleSubmit}>
        <label>
          Sexo
          <select value={sexo} onChange={e => setSexo(e.target.value)}>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </label>
        <label>
          Fecha de nacimiento 
          <input
            type="date"
            value={fechaNacimiento}
            onChange={e => setFechaNacimiento(e.target.value)}
          />
        </label>
        <label>
          Peso
          <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
        </label>
        <button className="NuevoPaciente__boton" type="submit">
          Registrar paciente
        </button>
      </form>
    </div>
  )
}

export default NuevoPaciente
