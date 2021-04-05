import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { format, subDays } from 'date-fns'
import { es } from 'date-fns/locale'
import './ConfirmacionSemanal.css'
import { InlineIcon } from '@iconify/react'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'

const ConfirmacionSemanal = () => {

  const { tragos } = useSelector(state => state.registro)

  return (
    <div className="ConfirmacionSemanal">
      <h3 className="ConfirmacionSemanal__titulo">Resumen de su consumo</h3>
      <p className="ConfirmacionSemanal__bajada">Por favor revise y corrija si encuentra algún error</p>
      <div className="ConfirmacionSemanal__contenedor_dias">
        {tragos.map((tragosDia, i) => (
          <div className="ConfirmacionSemanal__fila_dia" key={`resumen-tragos-dia-${i}`}>
            <div className="ConfirmacionSemanal__nombre_dia">
              {format(subDays(new Date(), 7 - i), 'iiii', { locale: es })}
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
          </div>
        ))}
      </div>
      <Link className="ConfirmacionSemanal__boton_siguiente" to="/registro/nuevo/gracias">
        Confirmar <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoSiguiente} />
      </Link>
    </div>
  )
}

export default ConfirmacionSemanal
