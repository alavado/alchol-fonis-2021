import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { seleccionaDia } from '../../../../../redux/ducks/registro'
import './SeleccionDias.css'

const SeleccionDias = () => {

  const { idPaciente } = useRouteMatch().params
  const { dias } = useSelector(state => state.registro)
  const dispatch = useDispatch()

  return (
    <div className="SeleccionDias">
      ¿Cuáles días de la última semana bebió alcohol?
      <div className="SeleccionDias__contenedor_inputs">
        {dias.map((dia, i) => (
          <label key={`toggle-dia-${i}`}>
            Día {i + 1}
            <input type="checkbox" checked={dia} onChange={e => {
              dispatch(seleccionaDia([i, e.target.checked]))
            }} />
          </label>
        ))}
      </div>
      <Link to={`/registro/nuevo/${idPaciente}/pregunta/1`}>
        Siguiente
      </Link>
    </div>
  )
}

export default SeleccionDias
