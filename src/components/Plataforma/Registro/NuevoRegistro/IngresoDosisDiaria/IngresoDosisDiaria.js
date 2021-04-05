import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { subDays, format } from 'date-fns'
import { es } from 'date-fns/locale'
import './IngresoDosisDiaria.css'
import { agregaTrago, quitaTrago } from '../../../../../redux/ducks/registro'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'

const IngresoDosisDiaria = () => {

  const { idPaciente, dia } = useRouteMatch().params
  const { dias, tragos } = useSelector(state => state.registro)
  const dispatch = useDispatch()
  const history = useHistory()

  if (+dia >= 7) {
    history.push(`/registro/nuevo/${idPaciente}/confirmacion`)
    return null
  }

  if (!dias[(+dia - 1)]) {
    history.push(`/registro/nuevo/${idPaciente}/pregunta/${+dia + 1}`)
    return null
  }

  const categoriasTragos = Array.from(new Set(tragos[dia].map(t => t.categoria)))

  return (
    <div className="IngresoDosisDiaria">
      <p>¿Cuánto bebió el <span style={{ fontWeight: 'bold' }}>{format(subDays(new Date(), 7 - (+dia - 1)), 'iiii', { locale: es })}</span>?</p>
      {categoriasTragos.map(categoria => (
        <div
          className="IngresoDosisDiaria__contenedor_categoria"
          key={`contenedor-categoria-${categoria}`}
        >
          <h3 className="IngresoDosisDiaria__titulo_categoria">{categoria}</h3>
          {tragos[dia - 1].filter(c => c.categoria === categoria).map(trago => (
            <div className="IngresoDosisDiaria__trago" key={`contenedor-trago-${trago.nombre}`}>
              <div
                className="IngresoDosisDiaria__contenedor_imagen_trago"
                onClick={() => dispatch(agregaTrago([dia - 1, trago.nombre]))}
              >
                <img className="IngresoDosisDiaria__imagen_trago" src={trago.imagen} alt={trago.nombre} />
              </div>
              <div className="IngresoDosisDiaria__contenedor_contador">
                <button
                  onClick={() => dispatch(quitaTrago([dia - 1, trago.nombre]))}
                  className="IngresoDosisDiaria__boton_contador"
                  style={{ opacity: trago.cantidad > 0 ? 1 : 0 }}
                >
                  -
                </button>
                <p className="IngresoDosisDiaria__contador">{trago.cantidad}</p>
                <button
                  onClick={() => dispatch(agregaTrago([dia - 1, trago.nombre]))}
                  className="IngresoDosisDiaria__boton_contador"
                >
                  +
                </button>
              </div>
              <legend className="IngresoDosisDiaria__nombre_trago">{trago.nombre}</legend>
            </div>
          ))}
        </div>
      ))}
      <Link className="IngresoDosisDiaria__boton_siguiente" to={`/registro/nuevo/${idPaciente}/pregunta/${+dia + 1}`}>
        Siguiente <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoSiguiente} />
      </Link>
    </div>
  )
}

export default IngresoDosisDiaria
