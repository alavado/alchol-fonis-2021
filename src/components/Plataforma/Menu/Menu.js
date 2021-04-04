import { useDispatch, useSelector } from 'react-redux'
import Icon from '@iconify/react'
import iconoCerrar from '@iconify-icons/mdi/arrow-back'
import { muestraMenu } from '../../../redux/ducks/menu'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './Menu.css'

const Menu = () => {

  const dispatch = useDispatch()
  const { visible } = useSelector(state => state.menu)

  return (
    <div
      className={classNames({
        "Menu": true,
        "Menu--visible": visible
      })}
    >
      <button
        className="Menu__boton_cerrar"
        onClick={() => dispatch(muestraMenu(false))}
      >
        <Icon icon={iconoCerrar} />
      </button>
      <Link className="Menu__link" to="/">Inicio</Link>
      <Link className="Menu__link" to="/">Nuevo registro</Link>
    </div>
  )
}

export default Menu
