import { Route, Switch } from 'react-router'
import NuevoPaciente from './NuevoPaciente'
import ListaPacientes from './ListaPacientes'
import './Pacientes.css'
import FichaPaciente from './FichaPaciente'

const Pacientes = () => {
  return (
    <div className="Pacientes">
      <Switch>
        <Route path="/pacientes/agregar/:id_paciente">
          <NuevoPaciente />
        </Route>
        <Route path="/pacientes/:id">
          <FichaPaciente />
        </Route>
        <Route>
          <ListaPacientes />
        </Route>
      </Switch>
    </div>
  )
}

export default Pacientes
