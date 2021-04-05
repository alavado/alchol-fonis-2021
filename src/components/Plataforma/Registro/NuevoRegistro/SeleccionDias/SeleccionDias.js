import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { seleccionaDia } from '../../../../../redux/ducks/registro'
import { subDays, format } from 'date-fns'
import { es } from 'date-fns/locale'
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
          <label className="SeleccionDias__label" key={`toggle-dia-${i}`}>
            <input type="checkbox" checked={dia} onChange={e => {
              dispatch(seleccionaDia([i, e.target.checked]))
            }} />
            {format(subDays(new Date(), 7 - i), 'iiii', { locale: es })}
            {i === 0 ? ' pasado' : i === 6 ? ' (ayer)' : ''}
          </label>
        ))}
      </div>
      <Link className="SeleccionDias__boton_siguiente" to={`/registro/nuevo/${idPaciente}/pregunta/1`}>
        Siguiente
      </Link>
    </div>
  )
}

export default SeleccionDias
