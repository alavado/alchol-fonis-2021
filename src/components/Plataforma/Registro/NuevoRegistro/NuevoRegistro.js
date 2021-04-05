import { Switch, Route, useRouteMatch } from 'react-router'
import SeleccionDias from './SeleccionDias'
import { Link } from 'react-router-dom'
import Agradecimientos from './Agradecimientos'
import ConfirmacionSemanal from './ConfirmacionSemanal'
import IngresoDosisDiaria from './IngresoDosisDiaria'
import './NuevoRegistro.css'

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
          <h2>Registrando paciente<br />id: {idPaciente}</h2>
          Entregue dispositivo a paciente
          <Link className="NuevoRegistro__boton" to={`/registro/nuevo/${idPaciente}/calendario`}>
            Aceptar
          </Link>
        </Route>
      </Switch>
    </div>
  )
}

export default NuevoRegistro
