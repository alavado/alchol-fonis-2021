import { InlineIcon } from '@iconify/react'
import { Link } from 'react-router-dom'
import iconoSiguiente from '@iconify-icons/mdi/chevron-right'
import imagenRecomendacion from '../../../../../assets/images/recomendacion.png'
import './Recomendacion.css'
import { useSelector } from 'react-redux'

const Recomendacion = () => {

  const { tragos } = useSelector(state => state.registro)

  const totalTragos = tragos
    .map(tragosDia => tragosDia
      .reduce((sum, t) => sum + t.cantidad * t.tragos, 0))
    .reduce((s, v) => s + v)

  return (
    <div className="Recomendacion">
      <h2 className="Recomendacion__titulo">Resultados</h2>
      <p className="Recomendacion__prefacio_numero_tragos">De acuerdo a lo ingresado, la última semana usted bebió en total</p>
      <p className="Recomendacion__numero_tragos">{totalTragos}</p>
      <p className="Recomendacion__sufijo_numero_tragos">TRAGOS<br />estándar</p>
      <h2 className="Recomendacion__titulo">Recomendaciones</h2>
      <img
        src={imagenRecomendacion}
        alt="Para tener menos riesgos, no beba más de 2 tragos al día"
        className="Recomendacion__imagen_recomendacion"
      />
      <Link className="Recomendacion__boton_siguiente" to="/registro/nuevo/gracias">
        Siguiente <InlineIcon className="IngresoDosisDiaria__icono_siguiente" icon={iconoSiguiente} />
      </Link>
    </div>
  )
}

export default Recomendacion
