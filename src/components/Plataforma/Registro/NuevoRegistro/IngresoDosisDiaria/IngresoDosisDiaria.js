import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import './IngresoDosisDiaria.css'

const IngresoDosisDiaria = () => {

  const { idPaciente, dia } = useRouteMatch().params
  const { dias } = useSelector(state => state.registro)
  const history = useHistory()
  console.log(dia)

  if (+dia >= 7) {
    history.push(`/registro/nuevo/${idPaciente}/confirmacion`)
    return null
  }

  if (!dias[+dia]) {
    history.push(`/registro/nuevo/${idPaciente}/pregunta/${+dia + 1}`)
    return null
  }

  return (
    <div className="IngresoDosisDiaria">
      ¿Cuánto tomó el {dia} pasado?
      <Link to={`/registro/nuevo/${idPaciente}/pregunta/${+dia + 1}`}>
        Siguiente
      </Link>
    </div>
  )
}

export default IngresoDosisDiaria
