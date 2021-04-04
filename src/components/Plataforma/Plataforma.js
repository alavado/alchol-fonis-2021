import { Route, Switch } from 'react-router'
import AcercaDe from './AcercaDe'
import BarraSuperior from './BarraSuperior'
import Inicio from './Inicio'
import Menu from './Menu'
import Pacientes from './Pacientes'
import './Plataforma.css'
import Registro from './Registro'

const Plataforma = () => {

  return (
    <div className="Plataforma">
      <Menu />
      <BarraSuperior />
      <Switch>
        <Route path="/acerca">
          <AcercaDe />
        </Route>
        <Route path="/pacientes">
          <Pacientes />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route>
          <Inicio />
        </Route>
      </Switch>
    </div>
  )
}

export default Plataforma
