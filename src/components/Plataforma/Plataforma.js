import { Route, Switch } from 'react-router'
import AcercaDe from './AcercaDe'
import BarraSuperior from './BarraSuperior'
import Inicio from './Inicio'
import Menu from './Menu'
import './Plataforma.css'

const Plataforma = () => {

  return (
    <div className="Plataforma">
      <Menu />
      <BarraSuperior />
      <Switch>
        <Route path="/acerca">
          <AcercaDe />
        </Route>
        <Route>
          <Inicio />
        </Route>
      </Switch>
    </div>
  )
}

export default Plataforma
