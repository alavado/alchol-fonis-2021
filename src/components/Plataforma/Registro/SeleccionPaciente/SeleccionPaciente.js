import { Link } from 'react-router-dom'
import './SeleccionPaciente.css'

const SeleccionPaciente = () => {
  return (
    <div className="SeleccionPaciente">
      <h2>Nuevo registro</h2>
      <Link className="SeleccionPaciente__opcion" to="/pacientes/agregar">Paciente nuevo</Link>
      <Link className="SeleccionPaciente__opcion" to="/pacientes">Paciente existente</Link>
    </div>
  )
}

export default SeleccionPaciente
