import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/mdi/menu'
import './BarraSuperior.css'
import { Link } from 'react-router-dom'
import { muestraMenu } from '../../../redux/ducks/menu'
import { useDispatch } from 'react-redux'

const BarraSuperior = () => {

  const dispatch = useDispatch()

  return (
    <div className="BarraSuperior">
      <div className="BarraSuperior__izquierda">
        <button
          className="BarraSuperior__boton_menu"
          onClick={() => dispatch(muestraMenu(true))}
        >
          <Icon
            className="BarraSuperior__icono_menu"
            icon={menuIcon}
          />
        </button>
        <h1 className="BarraSuperior__titulo">Demo FONIS 2021</h1>
      </div>
      <Link className="BarraSuperior__link" to="/acerca">Acerca de</Link>
    </div>
  )
}

export default BarraSuperior
