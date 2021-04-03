import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'
import { cierraLaSesion } from '../../redux/ducks/login'
import AcercaDe from './AcercaDe'
import BarraSuperior from './BarraSuperior'

import './Plataforma.css'

const Plataforma = () => {

  const dispatch = useDispatch()

  return (
    <div className="Plataforma">
      <BarraSuperior />
      <Switch>
        <Route path="/acerca">
          <AcercaDe />
        </Route>
        <Route>
          <div>Inicio</div>
        </Route>
      </Switch>
      <button onClick={() => dispatch(cierraLaSesion())}>Cerrar sesión</button>
    </div>
  )
}

export default Plataforma
