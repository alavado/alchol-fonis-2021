import { Switch, Route, useRouteMatch } from 'react-router'
import './NuevoRegistro.css'
import SeleccionDias from './SeleccionDias'
import { Link } from 'react-router-dom'
import Agradecimientos from './Agradecimientos'
import ConfirmacionSemanal from './ConfirmacionSemanal'
import IngresoDosisDiaria from './IngresoDosisDiaria'

const NuevoRegistro = () => {

  const { idPaciente } = useRouteMatch().params

  return (
    <div className="NuevoRegistro">
      <Switch>
        <Route path="/registro/nuevo/:idPaciente/calendario">
          <SeleccionDias />
        </Route>
        <Route path="/registro/nuevo/:idPaciente/pregunta/:dia">
          <IngresoDosisDiaria />
        </Route>
        <Route path="/registro/nuevo/:idPaciente/confirmacion">
          <ConfirmacionSemanal />
        </Route>
        <Route path="/registro/nuevo/gracias">
          <Agradecimientos />
        </Route>
        <Route>
          <h2>Nuevo registro</h2>
          NuevoRegistro para paciente {idPaciente}
          Entregue dispositivo a paciente
          <Link to={`/registro/nuevo/${idPaciente}/calendario`}>
            Comenzar
          </Link>
        </Route>
      </Switch>
    </div>
  )
}

export default NuevoRegistro
