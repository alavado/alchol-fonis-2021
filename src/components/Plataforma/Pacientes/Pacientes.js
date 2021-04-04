import { Route, Switch } from 'react-router'
import NuevoPaciente from './NuevoPaciente'
import ListaPacientes from './ListaPacientes'
import './Pacientes.css'

const Pacientes = () => {
  return (
    <div className="Pacientes">
      <Switch>
        <Route path="/pacientes/agregar">
          <NuevoPaciente />
        </Route>
        <Route>
          <ListaPacientes />
        </Route>
      </Switch>
    </div>
  )
}

export default Pacientes
