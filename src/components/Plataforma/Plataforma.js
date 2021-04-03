import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import AcercaDe from './AcercaDe'
import BarraSuperior from './BarraSuperior'
import Inicio from './Inicio'
import Menu from './Menu'
import './Plataforma.css'

const Plataforma = () => {

  const { visible } = useSelector(state => state.menu)

  return (
    <div className="Plataforma">
      {visible && <Menu />}
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
