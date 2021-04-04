import { Link } from 'react-router-dom'
import './SeleccionPaciente.css'

const SeleccionPaciente = () => {
  return (
    <div className="SeleccionPaciente">
      <h2>Nuevo registro</h2>
      <Link to="/pacientes/agregar">Paciente nuevo</Link>
      <Link to="/registro/nuevo">Paciente existente</Link>
    </div>
  )
}

export default SeleccionPaciente
