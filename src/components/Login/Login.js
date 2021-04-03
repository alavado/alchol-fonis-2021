import { useMutation } from '@apollo/client'
import { useState } from 'react'
import loginMutation from '../../graphql/mutations/login'
import './Login.css'

const Login = () => {

  const [usuario, setUsuario] = useState()
  const [password, setPassword] = useState()
  const [loginMutate, { loading: loginLoading, error: loginError }] = useMutation(loginMutation)

  const login = e => {
    e.preventDefault()
    loginMutate({ variables: { usuario, password } })
      .then(console.log)
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
