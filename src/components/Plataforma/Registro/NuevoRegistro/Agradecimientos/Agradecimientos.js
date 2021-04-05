import { Link } from 'react-router-dom'
import './Agradecimientos.css'

const Agradecimientos = () => {
  return (
    <div className="Agradecimientos">
      <p>¡Gracias!</p>
      <p>Su nivel de riesgo es <span style={{ fontWeight: 'bold' }}>Moderado</span></p>
      <Link className="Agradecimientos__boton" to="/inicio">Finalizar</Link>
    </div>
  )
}

export default Agradecimientos
