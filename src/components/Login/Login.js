import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginMutation from '../../graphql/mutations/login'
import { guardaUsuario } from '../../redux/ducks/login'
import './Login.css'

const Login = () => {

  const [usuario, setUsuario] = useState('fonis2021@prueba.cl')
  const [password, setPassword] = useState('fonis2021')
  const [loginMutate, { loading: loginLoading, error: loginError }] = useMutation(loginMutation)
  const dispatch = useDispatch()

  const login = e => {
    e.preventDefault()
    loginMutate({ variables: { usuario, password } })
      .then(({ data }) => dispatch(guardaUsuario(data.login)))
      .catch(err => console.error(err))
  }

  return (
    <div className="Login">
      <h1 className="Login__logo">Demo FONIS 2021</h1>
      <form className="Login__formulario" onSubmit={login}>
        <label className="Login__label">
          Usuario:
          <input className="Login__input" defaultValue={usuario} onChange={e => setUsuario(e.target.value)} />
        </label>
        <label className="Login__label">
          Contraseña:
          <input className="Login__input" defaultValue={password} type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="Login__boton" type="submit">Ingresar</button>
        {loginLoading && 'Ingresando...'}
        {loginError && 'Usuario o contraseña incorrectos'}
      </form>
    </div>
  )
}

export default Login
