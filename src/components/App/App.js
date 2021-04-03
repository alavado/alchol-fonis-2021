import { useSelector } from 'react-redux'
import Login from '../Login'
import Inicio from '../Inicio'
import './App.css'

const App = () => {

  const { jwt } = useSelector(state => state.login)

  return jwt ? <Inicio /> : <Login />
}

export default App