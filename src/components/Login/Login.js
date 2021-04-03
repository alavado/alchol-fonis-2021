import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginMutation from '../../graphql/mutations/login'
import { guardaUsuario } from '../../redux/ducks/login'
import './Login.css'

const Login = () => {

  const [usuario, setUsuario] = useState()
  const [password, setPassword] = useState()
  const [loginMutate, { loading: loginLoading, error: loginError }] = useMutation(loginMutation)
  const dispatch = useDispatch()

  const login = e => {
    e.preventDefault()
    loginMutate({ variables: { usuario, password } })
      .then(({ data }) => {
        console.log(data)
        dispatch(guardaUsuario(data.login))
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Usuario:
          <input onChange={e => setUsuario(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Ingresar</button>
        {loginLoading && 'Ingresando...'}
        {loginError && 'Usuario o contraseña incorrectos'}
      </form>
    </div>
  )
}

export default Login
