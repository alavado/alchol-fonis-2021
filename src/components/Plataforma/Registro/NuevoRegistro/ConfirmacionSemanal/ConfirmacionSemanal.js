import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { format, subDays } from 'date-fns'
import { es } from 'date-fns/locale'
import './ConfirmacionSemanal.css'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'
import iconoCalendario from '@iconify-icons/mdi/calendar-week'
import iconoCancelar from '@iconify-icons/mdi/close'
import iconoConfirmar from '@iconify-icons/mdi/check'
import { useState } from 'react'

const ConfirmacionSemanal = () => {

  const { tragos } = useSelector(state => state.registro)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)
  const { idPaciente } = useRouteMatch().params
  const history = useHistory()

  const avanzar = () => {
    setMostrarConfirmacion(true)
    // history.push('/registro/nuevo/recomendacion')
  }

  const enviarDatos = () => {
    history.push('/registro/nuevo/recomendacion')
  }

  return (
    <div className="ConfirmacionSemanal">
      <h3 className="ConfirmacionSemanal__titulo">Mi consumo de alcohol en la última semana</h3>
      <p className="ConfirmacionSemanal__bajada">
        Rellene los días y presione "Confirmar"
      </p>
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
                <InlineIcon icon={iconoCalendario} style={{ marginRight: '.5rem' }} /> {format(subDays(new Date(), 7 - i), 'iiii', { locale: es })}
                {i === 0 ? ' pasado' : i === 6 ? ' (ayer)' : ''}
              </div>
              <div className="ConfirmacionSemanal__imagenes_tragos">
                {tragosDia.map((trago, j) => {
                  const { cantidad } = trago
                  return cantidad > 0
                    ? [...Array(cantidad)].map((_, k) => <img key={`trago-${i}-${j}-${k}`} className="ConfirmacionSemanal__icono_trago" alt={trago.nombre} src={trago.imagen} />)
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
      {mostrarConfirmacion
        ? <div className="ConfirmacionSemanal__contenedor_botones_confirmacion">
            <p>Por favor revise que lo ingresado es correcto</p>
            <button
              className="ConfirmacionSemanal__boton_siguiente"
              onClick={() => setMostrarConfirmacion(false)}
            >
              Me faltó algo <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoCancelar} />
            </button>
            <button
              className="ConfirmacionSemanal__boton_siguiente"
              onClick={enviarDatos}
            >
              Terminé de ingresar <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoConfirmar} />
            </button>
          </div>
        : <button
            className="ConfirmacionSemanal__boton_siguiente"
            onClick={avanzar}
          >
            Confirmar <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoSiguiente} />
          </button>
      }
    </div>
  )
}

export default ConfirmacionSemanal
