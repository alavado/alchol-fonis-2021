import { useDispatch } from 'react-redux'
import { cierraLaSesion } from '../../redux/ducks/login'
import './Inicio.css'

const Inicio = () => {

  const dispatch = useDispatch()

  return (
    <div className="Inicio">
      Inicio
      <button onClick={() => dispatch(cierraLaSesion())}>Cerrar sesión</button>
    </div>
  )
}

export default Inicio
