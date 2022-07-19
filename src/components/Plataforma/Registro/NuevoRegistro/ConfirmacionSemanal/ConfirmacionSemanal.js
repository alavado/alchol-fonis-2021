import { useSelector } from 'react-redux'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { format, subDays } from 'date-fns'
import { es } from 'date-fns/locale'
import './ConfirmacionSemanal.css'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'

const ConfirmacionSemanal = () => {

  const { tragos } = useSelector(state => state.registro)
  const { idPaciente } = useRouteMatch().params
  const history = useHistory()

  return (
    <div className="ConfirmacionSemanal">
      <h3 className="ConfirmacionSemanal__titulo">Ingrese su consumo durante la última semana</h3>
      <p className="ConfirmacionSemanal__bajada">Seleccione los días que corresponda</p>
      <div className="ConfirmacionSemanal__contenedor_dias">
        {tragos.map((tragosDia, i) => {
          const tragosEstandar = tragosDia.reduce((sum, t) => sum + t.cantidad * t.tragos, 0)
          return (
            <div
              className="ConfirmacionSemanal__fila_dia"
              key={`resumen-tragos-dia-${i}`}
              onClick={() => history.push(`/registro/nuevo/${idPaciente}/pregunta/${i + 1}`)}
            >
              <div className="ConfirmacionSemanal__nombre_dia">
                📅 {format(subDays(new Date(), 7 - i), 'iiii', { locale: es })}
                {i === 0 ? ' pasado' : i === 6 ? ' (ayer)' : ''}
              </div>
              <div className="ConfirmacionSemanal__imagenes_tragos">
                {tragosDia.map(trago => {
                  const { cantidad } = trago
                  return cantidad > 0
                    ? Array(cantidad).fill(<img className="ConfirmacionSemanal__icono_trago" alt={trago.nombre} src={trago.imagen} />)
                    : null
                })}
              </div>
              {tragosEstandar > 0 && (
                <div className="ConfirmacionSemanal__tragos_dia">
                  {tragosEstandar} TRAGOS estándar
                </div>
              )}
            </div>
          )})}
      </div>
      <Link className="ConfirmacionSemanal__boton_siguiente" to="/registro/nuevo/recomendacion">
        Confirmar <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoSiguiente} />
      </Link>
    </div>
  )
}

export default ConfirmacionSemanal
