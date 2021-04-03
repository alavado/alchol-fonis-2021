import { useSelector } from 'react-redux'
import Login from '../Login'
import Plataforma from '../Plataforma'
import './App.css'

const App = () => {

  const { jwt } = useSelector(state => state.login)

  return jwt
    ? <Plataforma />
    : <Login />
}

export default App