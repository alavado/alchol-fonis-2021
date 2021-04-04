import { useRouteMatch } from 'react-router'
import './NuevoRegistro.css'

const NuevoRegistro = () => {

  const { idPaciente } = useRouteMatch().params

  return (
    <div className="NuevoRegistro">
      NuevoRegistro para paciente {idPaciente}
      Entregue dispositivo a paciente
      Comenzar
    </div>
  )
}

export default NuevoRegistro
